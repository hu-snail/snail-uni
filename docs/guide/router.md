# 路由

`snail-uni` 默认集成了 `uni-mini-router` 路由，使用类似 `vue-router` 的方式进行路由管理，同时也支持 `uni-app` 的自带的路由系统。下面将介绍如何使用 `snail-uni` 的路由：

::: tip 说明
路由配置在 `pages.config.ts` 中进行配置，`uni-parse-pages` 会自动将 `pages.json` 中的路由配置转换为 `uni-mini-router` 的路由配置。而 `pages.config.ts` 的路由配置也是自动生成的，所以本篇只介绍怎么使用路由
:::

## uni-mini-router 使用

`snail-uni` 配置了默认导入的 `uni-mini-router`，所以可以直接使用 `uni-mini-router` 的API, 无需导入

- 详细文档请查阅：[uni-mini-router文档](https://moonofweisheng.github.io/uni-mini-router/)

### 基础用法

```vue
<script setup lang="ts">
// 使用hooks（推荐）
let router = useRouter()

// 字符串路径
router.push('/user')

// 带有路径的对象
router.push({ path: '/user' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /user?username=eduardo
router.push({ path: '/user', query: { username: 'eduardo' } })

</script>
```

- `name` 路由名称定义

```vue
<route type="home" lang="json">
{
  "style": { "navigationBarTitleText": "首页" },
  "name": "home"
}
</route>
```

- 接收参数

```vue
<script setup lang="ts">
onLoad((option) => {
  if (option && option.username) {
    const username = option.username
  }
})
</script>
```

### 传递对象参数

`url` 有长度限制，太长的字符串会传递失败，可改用 `窗体通信、全局变量` ，另外参数中出现空格等特殊字符时需要对参数进行编码，如下为使用 `encodeURIComponent` 对参数进行编码的示例。

```vue
<script setup lang="ts">
let router = useRouter()

const user = {
  name:'小星星',
  label:"小熊熊"
}

// 命名的路由，传递对象参数
router.push({ name: 'user', params: { user: encodeURIComponent(JSON.stringify(user)) } })

// path+query，传递对象参数
router.push({ path: '/user', query: { user: encodeURIComponent(JSON.stringify(user)) } })

</script>
```

### 获取对象参数

```vue
<script setup lang="ts">
onLoad((option) => {
  if (option && option.user) {
    const user = JSON.parse(decodeURIComponent(option.user))
  }
})

</script>
```

## uni-app 路由

详细文档请查阅：[uni-app路由文档](https://uniapp.dcloud.net.cn/api/router.html#navigateto)

### uni.navigateTo(OBJECT)

保留当前页面，跳转到应用内的某个页面，使用 `uni.navigateBack` 可以返回到原页面。

- 示例

```ts
uni.navigateTo({
 url: 'test?id=1&name=snail-uni'
});
```

- 接收参数

```ts
export default {
 onLoad: function (option) {
  const { id, name } = option
 }
}
```

### uni.redirectTo(OBJECT)

关闭当前页面，跳转到应用内的某个页面。

- 示例

```ts
uni.redirectTo({
 url: 'test?id=1'
});
```

> 注意：跳转到 tabBar 页面只能使用 `uni.switchTab` 跳转
>
### uni.reLaunch(OBJECT)

关闭所有页面，打开到应用内的某个页面。

```ts
uni.reLaunch({
 url: 'test?id=1'
});
```

> 注：`H5` 端调用 `uni.reLaunch` 之后之前页面栈会销毁，但是无法清空浏览器之前的历史记录，此时 `navigateBack` 不能返回，如果存在历史记录的话点击浏览器的返回按钮或者调用 `history.back()` 仍然可以导航到浏览器的其他历史记录。

### uni.switchTab(OBJECT)

跳转到 `tabBar` 页面，并关闭其他所有非 `tabBar` 页面。

```ts
uni.switchTab({
 url: '/pages/index/index'
});
```

### uni.navigateBack(OBJECT)

关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。

```ts
// 此处是A页面
uni.navigateTo({
 url: 'B?id=1'
});

// 此处是B页面
uni.navigateTo({
 url: 'C?id=1'
});

// 在C页面内 navigateBack，将返回A页面
uni.navigateBack({
 delta: 2
});
```

## 路由守卫

::: tip 说明
`uni-mini-router` 自带有路由守卫配置，但是不兼容 `uni-app` 路由跳转，而 `uni-app` 路由守卫可以兼容 `uni-mini-router`，所以 `snail-uni` 默认使用 `uni-app` 路由守卫，如果需要使用 `uni-mini-router` 的路由守卫，请在 `src/router/index.ts` 文件中进行相关配置。
:::

本篇主要介绍 `uni-app` 路由守卫

**注意**：`tabBar` 页面不能使用路由守卫

```ts
import { useUserStore } from '@/store';
import { isWhiteList } from '@/router';

const navigateToInterceptor = {
  invoke({ url }: { url: string }) {
    // 判断是否登录
    if (useUserStore().token) {
      return true;
    } else {
      const flag = isWhiteList(url);
      if (!flag) return uni.navigateTo({ url: '/sub-pages/login/index' });
      return flag;
    }
  },
};

export const routeInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', navigateToInterceptor);
    uni.addInterceptor('reLaunch', navigateToInterceptor);
    uni.addInterceptor('redirectTo', navigateToInterceptor);
  },
};

```

`isWhiteList` 是一个判断是否是白名单的函数，`snail-uni` 支持两个场景模式：

- 大部分需要登录的业务场景， 该场景配置免登录的路由
- 少部分需要登录的业务场景， 该场景配置需要登录的路由

- 场景开关配置

```sh
# 路由相关配置
# 是否开启登录拦截 默认开启，在src/router/white-list.ts中配置免登录路由 适合大部分需要登录的场景
# 设置为false关闭后，需要设置不需要登录的路由，适合大部分不需要登录的场景
# 根据自己的业务需求进行修改调整
VITE_OPNE_NO_LOGIN = true
```

配置如下：

```ts
const { VITE_OPNE_NO_LOGIN } = import.meta.env;
/**
 * !!! 注： whiteListByPath 和 loginList不能同时生效
 * VITE_OPNE_NO_LOGIN 为true 设置whiteListByPath，反之设置loginList
 * 请根据自己的业务进行调整
 */
/** 免登录白名单（匹配路由 path） */
const whiteListByPath: string[] = ['/sub-pages/login/index'];

/** 需要登录的白名单 匹配路由 path） */
const loginList: string[] = ['/sub-pages/detail/index'];

/** 判断是否在白名单 */
export const isWhiteList = (to: any) => {
  if (JSON.parse(VITE_OPNE_NO_LOGIN)) return whiteListByPath.indexOf(to) !== -1;
  else {
    return loginList.indexOf(to) === -1;
  }
};

```
  