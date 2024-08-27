# 介绍

`snail-uni` 是 `uniapp` 最佳的开发框架，使用最新的前端技术栈 `Vite5` + `Vue3` + `Ts` +  `Uni Mini Router` + `UnoCss` 构建，让你可以使用 `Vscode` 编辑器进行高效编码，通过命令行方式即可运行 `web`、`小程序` 和 `App`, 无需依靠 `HBuilderX`
> 注：App 需要依赖 `HBuilderX`

`snail-uni` 集成了 `Uni Mini Router`路由插件系统，让你可以使用 `vue-router`的方式进行路由交互, 内置了`常用组件`，`layout布局`，`请求封装`，`UnoCSS`，`i18n多语言`等基础功能。`snail-uni` 提供了专用的`脚手架工具`，通过命令方式即可创建不同启动模板，`snail-uni`集成了`Oxlint`最新的代码规范，更高效的检测代码质量。

::: warning 注意！！！
`snail-uni` 这个版本主要是配合 `vscode` 开发工具的开发，关于 `HBuilderX` 相关的支持作者后续的版本会支持。
:::

## 特性

- 使用 `Vue3` + `Vite5` + `Ts` 等最新技术栈构建
- 采用 `pnpm` + `Monorepo` 模式构建
- 路由自动注册，无需手动配置路由，同时集成了`Uni Mini Router`路由插件系统
- 集成 `Oxlint` + `Eslint` 最新的代码规范，更高效的检测代码质量
- 宇宙最强编辑器`Vscode`，告别HBuilderX
- 支持`uni-app`、`vue3`、`pinia`、`uni mini router`自动导入
- 支持`i18n多语言`模式
- 支持`微信云开发`

## 目录结构

本项目采用`pnpm` + `Monorepo` 模式，具体目录结构如下：

```shell
├── .vscode                      # vscode 配置   
├── docs                         # 项目文档
├── packages                     # 项目包
│   │── snail-cli                # 脚手架工具
│   │── snail-eslint-config      # eslint 配置
│   │── snail-request            # 请求封装
│   │── snail-utils              # 工具类封装
├── play                         # 演示文件
│   ├── dist                     # 打包文件
│   ├── env                      # 运行环境变量
│   ├── node_modules             # 第三方插件库
│   ├── src                      # 源文件        
│   │   ├── layouts              # 布局文件
│   │   ├── pages                # 主页面文件
│   │   ├── sub-pages            # 分包页面文件
│   │   ├── router               # 路由文件
│   │   ├── static               # 静态资源文件
│   │   ├── types                # d.ts类型文件
│   │   ├── App.vue              # App.vue
│   │   ├── env.d.ts             # env.d.ts
│   │   ├── main.ts              # 主要文件
│   │   ├── manifest.json        # manifest 配置,根据manifest.config.ts 生成
│   │   ├── pages.json           # 小程序页面配置文件， 根据pages.config.ts 生成
│   │   ├── uni.scss             # uni全局样式 
│   │   ├── .eslintrc-auto-import 
│   │   ├── index.html           # index.html 
│   │   ├── manifest.config.json # manifest配置文件 
│   │   ├── pages.config.json    # pages 配置文件 
│   │   ├── package.json         # package.json 配置文件 
│   │   ├── vite.config.ts       # vite配置文件
├── .editorconfig                # 编辑器配置文件
├── .eslintignore                # eslint 忽略文件
├── .eslintrc.json               # eslint 配置文件
├── .prettierignore              # prettier 忽略文件
├── .gitignore                   # git 忽略文件
├── pnpm-lock.yaml               # pnpm 锁文件
├── pnpm-workspace.yaml          # pnpm 工作空间配置文件
├── prettier.config.mjs          # prettier 配置文件
├── tsconfig.json                # ts 配置文件
├── verify-commit.mjs            # 提交信息校验文件
├── README                       # 说明文档
└── package.json                 # package.json
```
