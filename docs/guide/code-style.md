# 代码规范篇
不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。
>本项目使用`eslint` + `oxlint` + `prettier` 来实现代码规范。

## Vscode 安装插件
通过 `snail-uni` 创建的项目已经配置好了`vscode` 插件。 `.vscode/extensions.json` 文件：
```sh
├── .vscode
│   └── extensions.json
```
## Vscode 配置
在 `.vscode/settings.json` 文件中配置：
```json
{
  // 默认格式化工具选择prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 保存的时候自动格式化
  "editor.formatOnSave": true,
  //开启自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  // 配置stylelint检查的文件类型范围
  "stylelint.validate": ["css", "scss", "vue", "html"], // 与package.json的scripts对应
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "[shellscript]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
  "[dotenv]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 配置语言的文件关联
  "files.associations": {
    "pages.json": "jsonc", // pages.json 可以写注释
    "manifest.json": "jsonc" // manifest.json 可以写注释
  },

  "typescript.tsdk": "node_modules\\typescript\\lib",
 
}

```

## eslint 配置
`snail-uni` eslint配置在单独的分包中 `packages/snail-eslint-config` 单独发布，支持单独引用安装。在项目中使用：
```json
// .eslintrc.json
{
  "root": true,
  "extends": ["@snail-uni/eslint-config"]
}
```
> 注：可自定义其他配置规则


## stylelint配置
`snail-uni` stylelint配置在单独的分包中 `packages/snail-stylelint-config` 单独发布，支持单独引用安装。在项目中使用：
```json
//.stylelintrc.json
{
  "root": true,
  "extends": ["@snail-uni/stylelint-config"]
}

```
> 注：可自定义其他配置规则

