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

在使用前建议先全局安装脚手架，命令如下：

```sh
# npm
npm install snail-uni -g
# or pnpm
pnpm add snail-uni -g
# or yarn
yarn add snail-uni 
```

### 一.命令导向方式

如果使用 `pnpm`, `yarn` 命令安装，请先全局安装 `snail-uni` 脚手架工具, 否则命令无效!

```sh
# npm
npx snail-uni create
# pnpm
pnpm snail-uni create  
# yarn
yarn snail-uni create

```

### 二.命令行选项

通过附加的命令行选项直接指定项目名称和你想要使用的模板, 例如：
`npx snail-uni create <project-name> <语言类型（js/ts）> <是否使用（tabbar/no)> <是否使用代码检查（eslint/no）> <ui库（Wot-Design/Uv-ui/Uview-plus/TuniaoUI）>` 不指定类型默认为 `js` 版本且其他都默认关闭！

```sh
# npm
# 创建 ts、tabbar、eslint版本 
npx snail-uni create snail-uni-app ts tabbar eslint
# 创建 js、tabbar、eslint版本
npx snail-uni create snail-uni-app js tabbar eslint
# 创建 ts、tabbar, 不使用 eslint版本
npx snail-uni create snail-uni-app ts tabbar
# 创建 js、tabbar, 不使用 eslint版本
npx snail-uni create snail-uni-app js tabbar
# 创建ts、不需要tabbar 不需要eslint
npx snail-uni create snail-uni-app ts
# 创建js、不需要tabbar 不需要eslint
npx snail-uni create snail-uni-app
# 创建指定ui库版本
npx snail-uni create snail-uni-app ts tabbar eslint Uv-ui

# pnpm
pnpm create snail-uni snail-uni-app ts

# yarn
yarn create snail-uni snail-uni-app ts
```

执行完之后，将生成一个新的项目
