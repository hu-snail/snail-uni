# 快速开始

::: tip 兼容性注意
Snail-uni 要求 [Node.js](https://nodejs.org/en/) 版本 `18+` 或者 `20+`. 请注意升级你的 `Node.js` 版本！否则会导致项目无法正常运行！
:::

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

## 创建一个Snail-uni项目

`snail-uni` 附带一个命令行创建向导，可以帮助你构建一个基本项目。支持创建 `js` 与 `ts` 让你无需纠结。
::: warning 注意
Snail-uni 要求 [Node.js](https://nodejs.org/en/) 版本 `18+` 或者 `20+`. 请注意升级你的 `Node.js` 版本！否则会导致项目无法正常运行！
:::
::: code-group

```bash [npm]
npm create snail-uni@latest
```

```bash [pnpm]
pnpm create snail-uni 
```

```bash [Yarn]
yarn create snail-uni 
```

```bash [Bun]
bun create snail-uni 
```

:::

将需要回答几个简单的问题：

<<< @/snippets/create.ansi

::: tip Tabbar说明
Snail-uni 使用[uni-app](https://uniapp.dcloud.net.cn/api/ui/tabbar.html#settabbaritem)原生导航，自定义导航性能不如原生，非必要不建议使用自定义！
:::

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板, 例如：
 不指定类型默认为 `js` 版本且其他都默认关闭！支持两种创建语法：

### 方式一

npm create snail-uni `<project-name> --t <template-name 模板名称> --ui <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI> --lint <yes/no）>`
::: code-group

```bash [npm]
npm create snail-uni@latest my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

```bash [pnpm]
pnpm create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

```bash [Yarn]
yarn create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

```bash [Bun]
bun create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

:::

- 支持以下模板：`uni-ts`、`uni-tabbar-ts`、`uni-js`、`uni-tabbar-js`
- 支持以下ui库：`Wot-Design`、`Uv-ui`、`Uview-plus`、`TuniaoUI`

### 方式二

npm create snail-uni `<project-name> <语言类型（js/ts）> <是否使用（tabbar/no)> <是否使用代码检查（eslint/no）> <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI）>`
::: code-group

```bash [npm]
# 创建 ts、tabbar、eslint版本 
npm create snail-uni snail-uni-app ts tabbar eslint
# 创建 js、tabbar、eslint版本
npm create snail-uni snail-uni-app js tabbar eslint
# 创建 ts、tabbar, 不使用 eslint版本
npm create snail-uni snail-uni-app ts tabbar
# 创建 js、tabbar, 不使用 eslint版本
npm create snail-uni snail-uni-app js tabbar
# 创建ts、不需要tabbar 不需要eslint
npm create snail-uni snail-uni-app ts
# 创建js、不需要tabbar 不需要eslint
npm create snail-uni snail-uni-app
# 创建指定ui库版本 Wot-Design | Uv-ui | Uview-plus | TuniaoUI
npm create snail-uni snail-uni-app ts tabbar eslint Uv-ui
```

```bash [pnpm]
# 创建 ts、tabbar、eslint版本 
pnpm create snail-uni snail-uni-app ts tabbar eslint
# 创建 js、tabbar、eslint版本
pnpm create snail-uni snail-uni-app js tabbar eslint
# 创建 ts、tabbar, 不使用 eslint版本
pnpm create snail-uni snail-uni-app ts tabbar
# 创建 js、tabbar, 不使用 eslint版本
pnpm create snail-uni snail-uni-app js tabbar
# 创建ts、不需要tabbar 不需要eslint
pnpm create snail-uni snail-uni-app ts
# 创建js、不需要tabbar 不需要eslint
pnpm create snail-uni snail-uni-app
# 创建指定ui库版本  Wot-Design | Uv-ui | Uview-plus | TuniaoUI
pnpm create snail-uni snail-uni-app ts tabbar eslint Uv-ui
```

```bash [Yarn]
# 创建 ts、tabbar、eslint版本
yarn create snail-uni snail-uni-app ts tabbar eslint
# 创建 js、tabbar、eslint版本
yarn create snail-uni snail-uni-app js tabbar eslint
# 创建 ts、tabbar, 不使用 eslint版本
yarn create snail-uni snail-uni-app ts tabbar
# 创建 js、tabbar, 不使用 eslint版本
yarn create snail-uni snail-uni-app js tabbar
# 创建ts、不需要tabbar 不需要eslint
yarn create snail-uni snail-uni-app ts
# 创建js、不需要tabbar 不需要eslint
yarn create snail-uni snail-uni-app
# 创建指定ui库版本  Wot-Design | Uv-ui | Uview-plus | TuniaoUI
yarn create snail-uni snail-uni-app ts tabbar eslint Uv-ui
```

```bash [Bun]
# 创建 ts、tabbar、eslint版本
bun create snail-uni snail-uni-app ts tabbar eslint
# 创建 js、tabbar、eslint版本
bun create snail-uni snail-uni-app js tabbar eslint
# 创建 ts、tabbar, 不使用 eslint版本
bun create snail-uni snail-uni-app ts tabbar
# 创建 js、tabbar, 不使用 eslint版本
bun create snail-uni snail-uni-app js tabbar
# 创建ts、不需要tabbar 不需要eslint
bun create snail-uni snail-uni-app ts
# 创建js、不需要tabbar 不需要eslint
bun create snail-uni snail-uni-app
# 创建指定ui库版本  Wot-Design | Uv-ui | Uview-plus | TuniaoUI
bun create snail-uni snail-uni-app ts tabbar eslint Uv-ui
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

```bash [npm]
npm run dev
```

```bash [pnpm]
pnpm run dev # or pnpm dev
```

```sh [Yarn]
yarn dev
```

```bash [Bun]
bun run dev
```

:::

`build` 脚本将构建应用，并生成一个或多个平台包。使用以下命令运行它：
> 默认构建微信小程序,根据自己需求在`package.json` 中进行调整

::: code-group

```bash [npm]
npm run build
```

```bash [pnpm]
pnpm run build # or pnpm build
```

```bash [Yarn]
yarn build
```

```bash [Bun]
bun run build
```
