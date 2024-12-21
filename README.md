<h1 align="center">🌾 snail-uni 🌾</h1>
<p align="center">
    <a href="https://www.npmjs.com/package/snail-uni"><img src="https://img.shields.io/npm/dm/snail-uni?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/snail-uni"><img src="https://img.shields.io/npm/v/snail-uni?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">更懂你的uni-app框架</p>

## 🌴 介绍

`snail-uni` - 专为开发者打造的 `UniApp` 框架模板。 基于 `UniApp + Vue3 + TypeScript + Vite + Wot Design Uni` 的高效框架模板。它内置了 `Snail-Uni` 脚手架工具，帮助您快速创建 `TypeScript` 或 `JavaScript` 版本项目。`Snail-Uni` 配备了丰富的开箱即用配置，让您从一开始就拥有高效的开发体验。

- [项目文档](https://hu-snail.github.io/snail-uni/)
- [github地址](https://github.com/hu-snail/snail-uni)
- [gitee地址](https://gitee.com/hu-snail/snail-uni)

## 🚀 使用

### 一.命令导向方式

```sh
# npm
npm create snail-uni
# pnpm
pnpm create snail-uni 
# yarn
yarn create snail-uni
# bun
bun create snail-uni

```

### 二.命令行选项

命令行支持两种方式创建：

#### 方式一

npm create snail-uni `<project-name> --t <template-name 模板名称> --ui <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI> --lint <yes/no）>`

```sh
# npm
npm create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# pnpm
pnpm create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# yarn
yarn create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
# bun
bun create snail-uni my-snail-app --t uni-ts --ui Uv-ui  --lint yes
```

- 支持以下模板：`uni-ts`、`uni-tabbar-ts`、`uni-js`、`uni-tabbar-js`
- 支持以下ui库：`Wot-Design`、`Uv-ui`、`Uview-plus`、`TuniaoUI`

#### 方式二

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
