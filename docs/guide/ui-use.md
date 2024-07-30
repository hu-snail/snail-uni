# UI使用篇
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

### 3.安装其他UI库
> 注： 详细文档请查阅官方文档

- [uni-ui文档](https://en.uniapp.dcloud.io/component/uniui/uni-ui.html)：`uni-app`官方维护的UI组件库
- [uv-ui文档](https://www.uvui.cn/)：`uv-ui` 破釜沉舟之兼容`vue3+2`、`nvue`、`app`、`h5`、`小程序`等多端基于 `uni-app` 和 `uView2.x` 的生态框架，支持 `单独导入`，开箱即用，利剑出击
- [uview-plus文档](https://uiadmin.net/uview-plus/)： `uview-plus` 是全面兼容`nvue` 的 `uni-app`生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水
- [tuniao-ui-uniapp-v3文档](https://vue3.tuniaokj.com)：`TuniaoUI vue3 uniapp` 是一款基于 `uniapp`、`vue3`、`Typescript` 进行开发的 `UI`组件库
::: code-group
```sh [uni-ui]
pnpm add  @dcloudio/uni-ui
# or npm
# npm install @dcloudio/uni-ui
# or yarn
# yarn add @dcloudio/uni-ui
```
```sh [uv-ui]
pnpm add uv-ui
# or npm
# npm install @climblee/uv-ui
# or yarn
# yarn add @climblee/uv-ui
```

```sh [uview-plus]
pnpm add uview-plus
# or npm
# npm install uview-plus
# or yarn
# yarn add uview-plus
```

```sh [Tuniao UI Uniapp V3]
pnpm add @tuniao/tnui-vue3-uniapp @tuniao/tn-icon @tuniao/tn-style
# or npm
# npm install @tuniao/tnui-vue3-uniapp @tuniao/tn-icon @tuniao/tn-style
# or yarn
# yarn add @tuniao/tnui-vue3-uniapp @tuniao/tn-icon @tuniao/tn-style
```
:::

### 4.配置其他UI库
- 在 `src/pages.config.ts` 文件添加相关配置：
::: code-group
```ts [uni-ui]
easycom: {
		autoscan: true,
		custom: {
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" // [!code ++]
		}
	},
```

```ts [uv-ui]
easycom: {
  autoscan: true,
  custom: {
    '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',// [!code ++]
  },
},
```
```ts [uview-plus]
easycom: {
    autoscan: true,
    custom: {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue", // [!code ++]
		"^up-(.*)": "uview-plus/components/u-$1/u-$1.vue", // [!code ++]
	    "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue" // [!code ++]
    }
}
```
```ts [Tuniao UI Uniapp V3]
{
  easycom: {
    custom: {
      "^tn-(.*)-(item|group)$": "@tuniao/tnui-vue3-uniapp/components/$1/src/$1-$2.vue", // [!code ++]
      "^tn-(.*)": "@tuniao/tnui-vue3-uniapp/components/$1/src/$1.vue" // [!code ++]
    }
  },
}
```
:::
- 在 `src/tsconfig.json` 文件添加相关配置：
::: code-group
```json [uni-ui]
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "@types/wechat-miniprogram",
      "@uni-helper/uni-ui-types", // [!code ++]
    ]
  }
}
```
```json [uv-ui]
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "@types/wechat-miniprogram",
      "@ttou/uv-typings/shim", // [!code ++] 
      "@ttou/uv-typings/v2", // [!code ++] 
    ]
  }
}
```

```json [uview-plus]
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "@types/wechat-miniprogram",
      "uview-plus/types/index.d.ts", // [!code ++]
    ]
  }
}
```
```json [Tuniao UI Uniapp V3]
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "@types/wechat-miniprogram",
      "@tuniao/tnui-vue3-uniapp/types/index.d.ts", // [!code ++]
      "@tuniao/tn-icon/types/index.d.ts", // [!code ++]
    ]
  }
}
:::
