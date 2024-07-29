# 插件篇
- 项目中使用的插件列表
  - **@uni-helper**相关
    - [vite-plugin-uni-pages]( https://uni-helper.js.org/vite-plugin-uni-pages): 让你无需手动配置`pages.json` 页面配置`router`自动生成。
    - [vite-plugin-uni-platform](https://github.com/uni-helper/vite-plugin-uni-platform): 基于文件名 (*.<h5|mp-weixin|app>.*) 的按平台编译插件，需配合`vite-plugin-uni-pages`使用。
    - [vite-plugin-uni-manifest](https://github.com/uni-helper/vite-plugin-uni-manifest): 自动生成 manifest.json 插件，使用`manifest.config.ts`配置。
    - [vite-plugin-uni-layouts](https://github.com/uni-helper/vite-plugin-uni-layouts): 自动生成页面布局插件，使用`layouts`文件夹配置。
  - **Vite**相关
    - [vite-plugin-restart](https://github.com/antfu/vite-plugin-restart): 监听vite.config.js文件修改,自动重启服务插件。
    - [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import): 自动导入`Vue`、`uni-app`相关API插件。
  
## 说明
`snail-ui` 得益于 [uni-helper](https://github.com/uni-helper) 团队开发的插件，使得`uni-app`开发更加简单高效。感谢 `uni-helper` 团队的贡献！

```ts
 // 插件注意： Unixx需要在Uni()之前引入
plugins: [
  // uni-app pages配置 会根据route配置，自动生成路由
  UniPages({
    // 排除组件文件
    exclude: ['**/components/**/**.*'],
    // 'json5' | 'json' | 'yaml' | 'yml', 具体使用参看文档：https://uni-helper.js.org/vite-plugin-uni-pages
    routeBlockLang: 'json5',
    dts: 'src/types/uni-pages.d.ts',
    // 配置分包目录
    subPackages: ['src/sub-pages'],
  }),
  UniPlatform(),
  UniLayouts(),
  UniManifest(),
  Uni(),
]
```
> 注： `Unixx`需要在`Uni()`之前引入

## vite-plugin-uni-pages
`vite-plugin-uni-pages` 约定式路由，可通过`src/pages`目录下创建`.vue`文件，自动生成`pages.json`路由文件。页面全局配置可通过`src/pages.config.ts`进行配置。
> 注：切勿在`pages.json`进行修改，运行时会被覆盖。
### 插件配置示例
```ts
 return defineConfig({
  // ...
  plugins: [
    // ... 
    UniPages({
      // 排除组件文件
      exclude: ['**/components/**/**.*'],
      // 'json5' | 'json' | 'yaml' | 'yml', 具体使用参看文档：https://uni-helper.js.org/vite-plugin-uni-pages
      routeBlockLang: 'json5',
      dts: 'src/types/uni-pages.d.ts',
      // 配置分包目录
      subPackages: ['src/sub-pages'],
    }),
  ]
 })
```
- `exclude`: 排除组件文件
- `routeBlockLang`: 页面路由配置文件格式，默认为`json5`，可选值为`json`、`yaml`、`yml`。具体使用参考[文档](https://uni-helper.js.org/vite-plugin-uni-pages)
- `dts`: 生成`pages.json`类型声明文件路径，默认为`src/types/uni-pages.d.ts`。
- `subPackages`: 配置分包目录，不需要分包时，可以不配置，直接注释或者删除
### 使用示例(json)
```vue
<route type="home" lang="json">
{
  "style": { "navigationBarTitleText": "首页" },
  "name": "home"
}
</route>
```
- `type`:  使用 `type="home"` 属性设置首页 其他页面则不需要设置
- `lang`: 页面路由配置文件格式，默认为`json`，可选值为`json`、`yaml`、`yml`
- `name`: 页面路由名称，必须`唯一`，配合`uni-mini-router`插件，可以自动生成路由。
- `style`: 页面样式配置，具体参考[uni-app文档](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
  
### 其他页面示例
```vue
<!-- other.vue -->
<route lang="json">
{
  "style": { "navigationBarTitleText": "其他" },
  "name": "other"
}
</route>

```

### pages.config.ts
文件目录`src/pages.config.ts`，具体配置参考[uni-app文档](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
```ts
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

/**
 * 全局配置
 */
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
});

```
> `import { name } from './package.json';`直接读取`package.json`中的`name`字段作为项目名称,可以根据自己习惯修改即可！

## vite-plugin-uni-platform
`vite-plugin-uni-platform` 基于文件名 `(.<h5|mp-weixin|app>.)` 的按平台编译插件，需配合`vite-plugin-uni-pages`使用
### 插件配置示例
```ts
return defineConfig({
  plugins: [
    UniPages({
      // 排除组件文件
      exclude: ['**/components/**/**.*'],
      // 'json5' | 'json' | 'yaml' | 'yml', 具体使用参看文档：https://uni-helper.js.org/vite-plugin-uni-pages
      routeBlockLang: 'json5',
      dts: 'src/types/uni-pages.d.ts',
      // 配置分包目录
      subPackages: ['src/sub-pages'],
    }),
    UniPlatform(),
  ]
})
```
## vite-plugin-uni-manifest
`vite-plugin-uni-manifest` 自动生成 manifest.json 插件，使用`manifest.config.ts`配置。

## vite-plugin-uni-layouts
`vite-plugin-uni-layouts` 自动生成页面布局插件，使用`layouts`文件夹配置。
```shell
├── play        
│   ├── src                          
│   │   ├── layouts   # 布局文件夹
│   │   │   ├── default.vue # 默认布局
```
### 插件配置示例
```vue
<!-- default.vue -->
<template>
  <view class="defaul-app-layout">
    <slot />
  </view>
</template>

```
