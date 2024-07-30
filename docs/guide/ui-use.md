# Ui使用篇
`snail-uni` 最终选择[wot-design-uni](https://wot-design-uni.pages.dev)作为默认UI库，开发者可以根据需求选择其他UI库,本篇将介绍`wot-design-uni`在过程中遇到的问题和其他UI库的替换方法。
> `wot-design-uni`：一个基于`Vue3` + `TS` 开发的 `uni-app` 组件库，提供 `70+` 高质量组件，支持暗黑模式、国际化和自定义主题

:::warning 注意
截止`2024-07-30` 之前， `Wot-design-uni`目前支持 `微信小程序`、`支付宝小程序`、`钉钉小程序`、`H5`、`APP` 等平台! 如果需要适配其他平台请卸载`wot-design-uni`，并安装使用其他UI库。
:::

## 组件问题
关于`Wot-design-uni`组件库的使用问题请移步至[常见问题](https://wot-design-uni.netlify.app/guide/common-problems.html)

## UI库替换
`snail-uni` 脚手架支持选择不用版本的ui库，如果你已经安装使用了`wot-design-uni`，不想重新构建的情况下请先卸载`wot-design-uni`，然后按照以下步骤安装其他UI库（其他UI相同操作，不再赘述）
- 以`wot-design-uni`为例
### 1.卸载wot-design-uni
::: code-group

```sh [pnpm]
$ pnpm remove wot-design-uni
```

```sh [npm]
$ npm  uninstall wot-design-uni
```

```sh [yarn]
$ yarn remove wot-design-uni
```

```sh [bun]
$ bun remove wot-design-uni
```
:::
### 2.删除配置文件
在`src/pages.config.ts` 文件删除相关配置：
```ts
easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue', // [!code --]
    },
},
```


