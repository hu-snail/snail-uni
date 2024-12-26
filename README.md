<p align="center">
  <a href="https://hu-snail.github.io/snail-uni" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://hu-snail.github.io/snail-uni/logo.png" alt="Snail-uni logo">
  </a>
<h1 align="center">Snail-uni</h1>
<p align="center">
  更懂你的uni-app框架
</p>
<p align="center">
  <a href="https://github.com/hu-snail/snail-uni"><img src="https://img.shields.io/github/stars/hu-snail/snail-uni?style=flat&logo=github" alt="github stars"></a>
  <a href="https://github.com/hu-snail/snail-uni"><img src="https://img.shields.io/github/forks/hu-snail/snail-uni?style=flat&logo=github" alt="github forks"></a>
    <a href="https://gitee.com/hu-snail/snail-uni"><img src="https://gitee.com/hu-snail/snail-uni/badge/star.svg?theme=dark" alt="gitee stars"></a>
     <a href="https://gitee.com/hu-snail/snail-uni"><img src="https://gitee.com/hu-snail/snail-uni/badge/fork.svg?theme=dark" alt="gitee forks"></a>
      <a href="https://hu-snail.github.io/snail-uni"><img src="https://img.shields.io/badge/node-%3E%3D18-green" alt="node version"></a>
       <a href="https://hu-snail.github.io/snail-uni"><img src="https://img.shields.io/badge/pnpm-%3E%3D7.30-red" alt="pnpm version"></a>
</p>

`snail-uni` - 专为开发者打造的 `UniApp` 框架模板。 基于 `UniApp + Vue3 + TypeScript + Vite + Wot Design Uni` 的高效框架模板。它内置了 `Snail-Uni` 脚手架工具，帮助您快速创建 `TypeScript` 或 `JavaScript` 版本项目。`Snail-Uni` 配备了丰富的开箱即用配置，让您从一开始就拥有高效的开发体验。

- [项目文档](https://hu-snail.github.io/snail-uni/)
- [github地址](https://github.com/hu-snail/snail-uni)
- [gitee地址](https://gitee.com/hu-snail/snail-uni)

## ⭐️ 特性

- 💡 使用 `Vue3` + `Vite5` + `Ts` 等最新技术栈构建
- 📦  采用 `pnpm` + `Monorepo` 模式构建
- ⚡️ 路由自动注册，无需手动配置路由，同时集成了`Uni Mini Router`路由插件系统
- 🌱 集成 `Oxlint` + `Eslint` 最新的代码规范，更高效的检测代码质量
- 🛠️ 宇宙最强编辑器`Vscode`，告别HBuilderX
- 💻 支持`uni-app`、`vue3`、`pinia`、`uni mini router`自动导入
- 🍒 支持`微信云开发` （开发中）

## ✍️ 创建项目

### 🌱 一.命令导向方式

```sh
# npm
npm create snail-uni@latest
# pnpm
pnpm create snail-uni 
# yarn
yarn create snail-uni
# bun
bun create snail-uni

```

### 🌿 二.命令行选项

命令行支持两种方式创建：

#### 🌾 方式一

npm create snail-uni `<project-name> --t <template-name 模板名称> --ui <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI> --lint <yes/no）>`

```sh
# npm
npm create snail-uni@latest my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# pnpm
pnpm create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# yarn
yarn create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# bun
bun create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

- 支持以下模板：`uni-ts`、`uni-tabbar-ts`、`uni-js`、`uni-tabbar-js`
- 支持以下ui库：`Wot-Design`、`Uv-ui`、`Uview-plus`、`TuniaoUI`

#### 🌲 方式二

npm create snail-uni `<project-name> <语言类型（js/ts）> <是否使用（tabbar/no)> <是否使用代码检查（eslint/no）> <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI）>`

```sh
# npm
# 创建 ts、tabbar、eslint版本 
npm create snail-uni snail-uni-app ts tabbar eslint
# pnpm
pnpm create snail-uni snail-uni-app ts tabbar eslint
# yarn
yarn create snail-uni snail-uni-app ts tabbar eslint
# bun
bun create snail-uni snail-uni-app ts tabbar eslint
```

执行完之后，将生成一个 `uni-app` 的项目

## 📚 启动并运行

`snail-uni` 启动运行脚本在`package.json`中配置：

```json
{
  "scripts": {
    "dev": "uni -p mp-weixin",
    "dev:h5": "uni",
    "build": "uni build -p mp-weixin",
    "build:h5": "uni build"
  },
}
```

`dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：
> 默认启动微信小程序,根据自己需求在`package.json` 中进行调整
>
```bash
# npm
npm run dev
# pnpm
pnpm dev
# Yarn
yarn dev
# Bun
bun run dev
```

`build` 脚本将构建应用，并生成一个或多个平台包。使用以下命令运行它：
> 默认构建微信小程序,根据自己需求在`package.json` 中进行调整

```bash
# npm
npm run build
# pnpm
pnpm build
# Yarn
yarn build
# Bun
bun run build
```
