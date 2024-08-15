# 图标
本项目推荐使用图标方案：
- UI 图标库
- UnoCSS + Iconify 图标库
- Iconfont 图标库
## UI 图标库
`snail-uni` 推荐UI组件库分别是：`wot-design-ui` ,  `uv-ui`, `uview-plus` ,  `tuniao-ui` , 选择你安装的UI组件库，查看相应文档获取图标使用方式。

###  wot-design-ui
> 具体使用，请查看[文档](https://wot-design-uni.pages.dev/component/icon.html)


```vue
<!--  通过 name 属性设置使用哪个图标。 -->
<wd-icon name="add-circle" />
<!--  通过 size 属性设置图标大小 -->
<wd-icon name="add-circle" size="20px" />
<!--  通过 color 属性设置图标颜色 -->
<wd-icon name="add-circle" color="#409EFF" />
```

### uv-ui
> 具体使用，请查看[文档](https://www.uvui.cn/components/icon.html)

```vue
<uv-icon name="photo"></uv-icon>
<uv-icon name="photo" color="#2979ff" size="28"></uv-icon>
```
### uview-plus
> 具体使用，请查看[文档](https://uiadmin.net/uview-plus/components/icon.html)

```vue
<up-icon name="photo"></up-icon>
<up-icon name="photo" color="#2979ff" size="28"></up-icon>
```
### tuniao-ui
> 具体使用，请查看[文档](https://vue3.tuniaokj.com/doc/component/icon.html)

```vue
<TnIcon name="logo-tuniao" type="primary" />
<TnIcon name="logo-tuniao" color="tn-blue" />
<TnIcon name="logo-tuniao" transparent transparent-bg="tn-green" />

```

## UnoCSS + Iconify 图标库
`UnoCSS Icons` 可轻松接入[iconify](https://icones.js.org/) 图标库，`iconify` 拥有 `10w+` 海量图标。`snail-uni` 默认集成了字节图标库 `@iconify-json/icon-park-outline`, 通过[iconify 图标集](https://icones.js.org/collection/icon-park-outline) 查看具体图标

### 使用案例
以 `@iconify-json/icon-park-outline` 为例：
### 安装图标库
::: code-group
```sh [npm]
npm install @iconify-json/icon-park-outline -D
```
```sh [pnpm]
pnpm add  @iconify-json/icon-park-outline -D
```
```sh [yarn]
yarn add  @iconify-json/icon-park-outline -D
```
:::

### unocss图标配置
```ts
// uno.config.ts
export default defineConfig({
  presets: [
    ...,
    // 配置图标
    presetIcons({
      scale: 1.2,
      warn: true,
      prefix: 'sn-',
      autoInstall: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    })
  ],
```
**配置说明**： 
- `scale`: 放大倍数，
- `warn`: 是否开启警告，
- `prefix`: 图标前缀，在使用图标时，需要加上前缀，如：`sn-icon-name`
- `autoInstall`: 是否自动安装图标库，
- `extraProperties`: 额外属性

### 页面中使用
在使用之前请先打开[icon-park-outline 图标集](https://icones.js.org/collection/icon-park-outline)，以 `add-four` 为例，点击复制`icon-park-outline:add-four`, 在项目中使用记得添加图标前缀 `sn-`

<img src="../public/icon-use.jpg" alt="sn-icon-park-outline" />

- 代码示例：

```vue
<template>
  <button class="sn-icon-park-outline:add-four" />
</template>
```

### 修改图标大小/颜色
通过自定义类名`sn-icon`, 修改 `color` 和 `font-size` 即可：
```vue
<template>
  <button class="sn-icon sn-icon-park-outline:add-four" />
</template>

<style lang="scss" scoped>
  .sn-icon {
    color: #f45;
    font-size: 14px;
  }
</style>
```


