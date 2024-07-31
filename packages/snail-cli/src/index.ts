#!/usr/bin/env node
import minimist from 'minimist';
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
// import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import c from 'picocolors';

const argv: any = minimist(process.argv.slice(2));

export enum ScaffoldUIType {
  Default = 'Wot Design Ui',
  UvUi = 'Uv-ui',
  UviewPlus = 'Uview-plus',
  TuniaoUI = 'TuniaoUI',
}

export interface ScaffoldOptions {
  root: string;
  title?: string;
  description?: string;
  uiType?: ScaffoldUIType;
  useTs?: boolean;
}

export async function init(root: string | undefined) {
  intro(c.bold(c.cyan('欢迎使用snail-uni脚手架！')));

  const options: ScaffoldOptions = await group(
    {
      root: async () => {
        if (root) return root;
        return text({
          message: '项目根目录路径:',
          initialValue: './',
          placeholder: '请输入项目根目录路径',
          validate: (value) => {
            if (!value) return '根目录路径不能为空';
            if (value.includes(' ')) return '根目录路径不能有空格';
          },
        });
      },
      title: () =>
        text({
          message: '项目名称:',
          initialValue: 'snail-uni-app',
          placeholder: '请输入项目名称',
          validate: (value) => {
            if (!value) return '项目名称不能为空';
          },
        }),
      description: () =>
        text({
          message: '项目描述:',
          initialValue: 'A Snail-uni-app project',
          placeholder: '请输入项目描述',
          validate: (value) => {
            if (!value) return '项目描述不能为空';
          },
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
  root = './',
  title = 'My Awesome Project',
  description = 'A Vite + Vue3 + TypeScript project',
  uiType,
  useTs,
}: ScaffoldOptions): string {
  console.log('root:' + root);
  const resolvedRoot = path.resolve(root);
  console.log('resolvedRoot:' + resolvedRoot);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../play');

  console.log('templateDir' + templateDir);

  const data = {
    title: JSON.stringify(title),
    description: JSON.stringify(description),
    uiType,
    useTs,
  };
  console.log(data);
  const pm = getPackageManger();
  return `你已成功创建! 现在请使用 ${c.cyan(`${pm === 'npm' ? 'npx' : pm}`)} 运行你的项目`;
}

const command = argv._[0];
const root = argv._[command ? 1 : 0];
if (root) {
  argv.root = root;
}
if (command === 'init') {
  init(argv.root);
} else {
  log.warning(`无效的命令: ${command}`);
}
