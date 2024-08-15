#!/usr/bin/env node
import minimist from 'minimist';
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import pic from 'picocolors';
import template from 'lodash.template';

const { bold, green, red } = pic;
const argv: any = minimist(process.argv.slice(2));

export enum ScaffoldUIType {
  Default = 'Wot-Design',
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
  intro(bold(green('欢迎使用snail-uni脚手架！')));

  const options: ScaffoldOptions = await group(
    {
      title: () =>
        text({
          message: '项目名称:',
          placeholder: 'snai-uni-app',
          validate: (value) => {
            if (fs.existsSync(value)) return '该名称已存在，请重新输入';
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
  uiType = ScaffoldUIType.Default,
  useTs,
}: ScaffoldOptions): string {
  const resolvedRoot = path.resolve('./', title);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../template');
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
    } else targetPath = targetPath.replace(/\.(m?)ts$/, '.$1js');
    fs.outputFileSync(targetPath, compiled);
  };
  const filesToScaffold = [
    'src/layouts/default.vue',
    'src/pages/index/index.vue',
    'src/pages/my/index.vue',
    'index.html',
    'src/App.vue',
    'src/main.ts',
    'src/router/index.ts',
    'src/manifest.json',
    'src/pages.json',
    'uno.config.ts',
    'manifest.config.ts',
    'pages.config.ts',
  ];

  const envFilesToScaffold = ['env/.env', 'env/.env.development', 'env/.env.production', 'env/.env.test'];

  const projectConfigFilesToScaffold = [
    '.vscode/extensions.json',
    '.vscode/settings.json',
    '.editorconfig',
    '.eslintignore',
    '.eslintrc.json',
    '.prettierignore',
    '.stylelintignore',
    '.stylelintrc.json',
    '.npmrc',
    '.gitignore',
    'package.json',
  ];

  const tsFilesToScaffold = ['src/env.d.ts', 'tsconfig.json', 'shims-uni.d.ts'];
  if (useTs) projectConfigFilesToScaffold.push(...tsFilesToScaffold);
  const staticFilesToScaffold = ['src/static/logo.png', 'src/uni.scss'];

  // 添加项目配置文件
  filesToScaffold.push(...projectConfigFilesToScaffold);
  // 添加静态文件
  filesToScaffold.push(...staticFilesToScaffold);
  // 添加env文件
  filesToScaffold.push(...envFilesToScaffold);
  // 移动文件
  const moveFilesToScaffold = ['verify-commit.mjs', 'src/types/auto-import.d.ts', 'src/types/uni-pages.d.ts'];
  const fileName = useTs ? 'vite.config.ts' : 'vite.config.js';
  moveFilesToScaffold.push(fileName);

  for (const filePath of moveFilesToScaffold) {
    moveFiles(templateDir, resolvedRoot, filePath);
  }

  for (const file of filesToScaffold) {
    renderFile(file);
  }
  const pm = getPackageManger();
  return `你已成功创建! 现在请使用 ${green(`${pm}`)} 运行你的项目\n\n   进入项目：${green(`cd ${title}`)}\n   安装依赖：${green(`${pm} install`)}`;
}

export function moveFiles(templateDir: string, resolvedRoot: string, filePath: string) {
  fs.copySync(path.resolve(templateDir, filePath), path.resolve(resolvedRoot, filePath));
}

const command = argv._[0];
const title = argv._[1];
const useTs = argv._[2];
if (command === 'create') {
  if (title) {
    if (fs.existsSync(title)) log.error(red('该名称已存在，请重新输入'));
    else outro(scaffold({ title, useTs: useTs === 'ts' }));
  } else create();
} else {
  log.warning(`无效的命令: ${command}`);
}
