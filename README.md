# 快速开始
### 前置准备
  - **Node.js** 18 及以上版本
  - **pnpm** - `>=8.15.6`（推荐使用 `9.0.0`）
  - [VSCode](https://code.visualstudio.com/) 开发工具下载
  - [HBuilderX](https://www.dcloud.io/hbuilderx.html) - `APP` 的运行和发布需要
  - [Git](https://git-scm.com/download) 安装
> 注：无需**App**开发，则无需下载HBuilderX
     
## Vscode插件安装
`snail-uni`内置了插件安装配置文件，使用`Vscode`打开项目文件夹，点击`安装插件`即可安装插件。
```shell
├── .vscode
│   └── extensions.json
```

## 创建项目
`snail-uni` 附带一个命令行创建向导，可以帮助你构建一个基本项目。支持创建 `js` 与 `ts` 让你无需纠结。
::: code-group
```sh [npm]
npx snail-uni create
```
```sh [pnpm]
pnpm snail-uni create
```
```sh [yarn]
yarn snail-uni create
```
:::

将需要回答几个简单的问题：

<<< @/snippets/create.ansi

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板, 例如：
`snail-uni create <project-name> <语言类型（js/ts）>` 不指定类型默认为 `js` 版本， `ts`版本如下：
::: code-group
```sh [npm]
npx snail-uni create snail-uni-app ts
```
```sh [pnpm]
pnpm snail-uni create snail-uni-app ts
```
```sh [yarn]
yarn snail-uni create  snail-uni-app ts
```
:::

执行完之后，将生成一个新的项目

<<< @/snippets/create_title.ansi


## 启动并运行
`snail-uni` 启动运行脚本在`package.json`中配置：
```json
{
  ...
  "scripts": {
    "dev": "uni -p mp-weixin",
    "dev:h5": "uni",
    "build": "uni build -p mp-weixin",
    "build:h5": "uni build"
    ...
  },
  ...
}
```
`dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：
> 默认启动微信小程序,根据自己需求在`package.json` 中进行调整
> 
::: code-group
```sh [npm]
npm run dev
```
```sh [pnpm]
pnpm run dev # or pnpm dev
```
```sh [yarn]
yarn dev
```
:::

`build` 脚本将构建应用，并生成一个或多个平台包。使用以下命令运行它：
> 默认构建微信小程序,根据自己需求在`package.json` 中进行调整

::: code-group
```sh [npm]
npm run build
```
```sh [pnpm]
pnpm run build # or pnpm build
```
```sh [yarn]
yarn build
```

