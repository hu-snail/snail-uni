#!/usr/bin/env node
import minimist from 'minimist';
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import pic from 'picocolors';
import template from 'lodash.template';

import { version } from './package.json';

const { bold, green, red, gray } = pic;
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
  useTabbar?: boolean;

  useEslint?: boolean;
}

export async function create() {
  intro(bold(green(`欢迎使用 snail-uni@${version} 脚手架！`)));
  let title = '';
  const options: ScaffoldOptions = await group(
    {
      title: () =>
        text({
          message: '项目名称:',
          placeholder: 'snai-uni-app',
          validate: (value) => {
            title = value;
            if (fs.existsSync(value)) return '❌该项目名称已存在，请重新输入!';
          },
        }),
      description: () =>
        text({
          message: '项目描述:',
          placeholder: `A ${title || 'snai-uni-app'} project`,
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
      useTabbar: () =>
        confirm({
          message: '是否启用 Tabbar?',
          initialValue: true,
        }),
      useEslint: () =>
        confirm({
          message: '是否使用Eslint代码规范？',
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
  useTabbar,
  useEslint,
}: ScaffoldOptions): string {
  const resolvedRoot = path.resolve('./', title);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../template');
  const data = {
    title: JSON.stringify(title),
    description: JSON.stringify(description),
    uiType,
    useTs,
    useTabbar,
    useEslint,
  };

  const renderFile = (file: string) => {
    const filePath = path.resolve(templateDir, file);
    let targetPath = path.resolve(resolvedRoot, file);
    const src = fs.readFileSync(filePath, 'utf-8');

    const templateSettings = {
      interpolate: /<%=([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      importData: true,
    };

    const compiled = template(src, templateSettings)(data);
    if (useTs) {
      targetPath = targetPath.replace(/\.(m?)js$/, '.$1ts');
    } else targetPath = targetPath.replace(/\.(m?)ts$/, '.$1js');
    targetPath = targetPath.replace(/\.(m?)temp$/, '');
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
    'src/router/interceptors.ts',
    'src/router/white-list.ts',
    'src/store/index.ts',
    'src/store/modules/user.ts',
    'src/store/modules/counter.ts',
    'src/apis/index.ts',
    'src/manifest.json',
    'src/pages.json',
    'src/utils/request.ts',
    'vite.config.ts',
    'uno.config.ts',
    'manifest.config.ts',
    'pages.config.ts',
  ];

  const envFilesToScaffold = ['env/.env', 'env/.env.development', 'env/.env.production', 'env/.env.test'];

  // 项目文件配置
  const projectConfigFilesToScaffold = [
    '.vscode/extensions.json',
    '.vscode/settings.json',
    '.editorconfig',
    '.npmrc.temp',
    '.gitignore.temp',
    'package.json',
  ];

  // eslint文件配置
  const eslintFilesToScaffold = [
    '.eslintignore',
    '.eslintrc.json',
    '.prettierignore',
    '.stylelintignore',
    '.stylelintrc.json',
  ];

  const tabbarFilesToScaffold = ['src/layouts/tabbar.vue'];

  const tsFilesToScaffold = ['src/env.d.ts', 'tsconfig.json', 'shims-uni.d.ts'];
  if (useTs) projectConfigFilesToScaffold.push(...tsFilesToScaffold);
  if (useEslint) projectConfigFilesToScaffold.push(...eslintFilesToScaffold);
  const staticFilesToScaffold = ['src/uni.scss'];
  // 添加项目配置文件
  filesToScaffold.push(...projectConfigFilesToScaffold);
  // 添加静态文件
  filesToScaffold.push(...staticFilesToScaffold);
  // 添加env文件
  filesToScaffold.push(...envFilesToScaffold);
  // 添加tabbar文件
  if (useTabbar) filesToScaffold.push(...tabbarFilesToScaffold);
  // 移动文件
  const moveFilesToScaffold = ['verify-commit.mjs', 'src/types/auto-import.d.ts', 'src/types/uni-pages.d.ts'];
  if (useTabbar)
    moveFilesToScaffold.push(
      'src/static/tabbar/home_active.png',
      'src/static/tabbar/home_default.png',
      'src/static/tabbar/my_default.png',
      'src/static/tabbar/my_active.png',
    );
  moveFilesToScaffold.push('src/static/logo.png');
  for (const filePath of moveFilesToScaffold) {
    moveFiles(templateDir, resolvedRoot, filePath);
  }

  for (const file of filesToScaffold) {
    renderFile(file);
  }
  const pm = getPackageManger();
  return `🎉 你已成功创建! 现在请使用 ${green(`${pm}`)} 运行你的项目\n\n   进入项目：${green(`cd ${title}`)}\n   安装依赖：${green(`${pm} install`)} ${gray(`(安装前，请检查Node版本>= ${green('18.0.0')})`)} \n   运行项目：${green(`${pm} dev`)} ${gray(`(默认运行微信小程序)`)} \n   snail-uni文档: ${green('https://hu-snail.github.io/snail-uni')}\n`;
}

export function moveFiles(templateDir: string, resolvedRoot: string, filePath: string) {
  fs.copySync(path.resolve(templateDir, filePath), path.resolve(resolvedRoot, filePath));
}

export const createTemp = (title?: string, useTs?: string, tabbar?: string, eslint?: string, ui?: ScaffoldUIType) => {
  if (title) {
    if (fs.existsSync(title)) log.error(red('该名称已存在，请重新输入'));
    else
      outro(
        scaffold({
          title,
          useTs: useTs === 'ts',
          useTabbar: tabbar === 'tabbar',
          useEslint: eslint === 'eslint',
          uiType: ui,
        }),
      );
  } else create();
};
const command = argv._[0];
const projectName = argv._[1];
const isTs = argv._[2];
const isTabbar = argv._[3];
const isEslint = argv._[4];
let uiType = argv._[5];
if (!['Wot-Design', 'Uv-ui', 'Uview-plus', 'TuniaoUI'].includes(uiType)) {
  uiType = ScaffoldUIType.Default;
}

if (command === 'create') {
  createTemp(projectName, isTs, isTabbar, isEslint, uiType);
} else createTemp(projectName, isTs, isTabbar, isEslint, uiType);
