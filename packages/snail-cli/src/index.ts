#!/usr/bin/env node
import minimist from 'minimist';
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import pic from 'picocolors';
import template from 'lodash.template';

const { bold, cyan } = pic;
const argv: any = minimist(process.argv.slice(2));

export enum ScaffoldUIType {
  Default = 'Wot Design Ui',
  UvUi = 'Uv-ui',
  UviewPlus = 'Uview-plus',
  TuniaoUI = 'TuniaoUI',
}

export interface ScaffoldOptions {
  title?: string;
  description?: string;
  uiType?: ScaffoldUIType;
  useTs?: boolean;
}

export async function create() {
  intro(bold(cyan('欢迎使用snail-uni脚手架！')));

  const options: ScaffoldOptions = await group(
    {
      title: () =>
        text({
          message: '项目名称:',
          placeholder: 'snai-uni-app',
          validate: (value) => {
            if (fs.existsSync(value)) return '改名称已存在，请重新输入';
          },
        }),
      description: () =>
        text({
          message: '项目描述:',
          placeholder: 'A snail-uni-app project',
        }),
      uiType: () =>
        select({
          message: '选择 UI 框架:',
          options: [
            {
              // @ts-ignore
              value: ScaffoldUIType.Default,
              label: 'wot-design-ui',
              hint: '推荐',
            },
            {
              // @ts-ignore
              value: ScaffoldUIType.UvUi,
              label: 'uv-ui',
            },
            {
              // @ts-ignore
              value: ScaffoldUIType.UviewPlus,
              label: 'uview-plus',
            },
            {
              // @ts-ignore
              value: ScaffoldUIType.TuniaoUI,
              label: 'tuniao-ui',
            },
          ],
        }),
      useTs: () =>
        confirm({
          message: '是否使用 TypeScript?',
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        cancel('您已经取消了创建项目！');
        process.exit(0);
      },
    },
  );

  outro(scaffold(options));
}

const getPackageManger = () => {
  const name = process.env?.npm_config_user_agent || 'npm';
  return name.split('/')[0];
};

export function scaffold({
  title = 'snail-uni-app',
  description = 'A snail-uni-app project',
  uiType,
  useTs,
}: ScaffoldOptions): string {
  const resolvedRoot = path.resolve('./', title);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../template');
  console.log('resolvedRoot:' + resolvedRoot);
  const data = {
    title: JSON.stringify(title),
    description: JSON.stringify(description),
    uiType,
    useTs,
  };

  const renderFile = (file: string) => {
    const filePath = path.resolve(templateDir, file);
    let targetPath = path.resolve(resolvedRoot, file);
    const src = fs.readFileSync(filePath, 'utf-8');
    const compiled = template(src)(data);
    if (useTs) {
      targetPath = targetPath.replace(/\.(m?)js$/, '.$1ts');
    }
    fs.outputFileSync(targetPath, compiled);
  };
  const filesToScaffold = [
    'src/layouts/default.vue',
    'src/pages/index/index.vue',
    'src/pages/my/index.vue',
    'index.html',
    'src/App.vue',
    'src/main.ts',
    'manifest.config.ts',
    'pages.config.ts',
  ];

  const projectConfigFilesToScaffold = [
    '.vscode/extensions.json',
    '.vscode/settings.json',
    '.editorconfig',
    '.eslintignore',
    '.eslintrc.json',
    '.prettierignore',
    '.stylelintignore',
    'tsconfig.json',
    'shims-uni.d.ts',
    '.npmrc',
    '.gitignore',
    'package.json',
  ];

  const staticFilesToScaffold = ['src/static/logo.png'];

  // 添加项目配置文件
  filesToScaffold.push(...projectConfigFilesToScaffold);
  // 添加静态文件
  filesToScaffold.push(...staticFilesToScaffold);
  // 复制verify-commit.mjs
  fs.copySync(path.resolve(templateDir, 'verify-commit.mjs'), path.resolve(resolvedRoot, 'verify-commit.mjs'));

  for (const file of filesToScaffold) {
    renderFile(file);
  }
  const pm = getPackageManger();
  return `你已成功创建! 现在请使用 ${cyan(`${pm === 'npm' ? 'npx' : pm}`)} 运行你的项目`;
}

const command = argv._[0];

if (command === 'create') {
  create();
} else {
  log.warning(`无效的命令: ${command}`);
}
