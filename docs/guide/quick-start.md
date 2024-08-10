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
npx snail-uni create
```
```sh [yarn]
yarn snail-uni create
```
:::

将需要回答几个简单的问题：

<<< @/snippets/create.ansi

## 安装与运行

