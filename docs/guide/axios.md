# Axios 请求
`snail-uni` 默认集成了 `axios` 请求封装，兼容适配 `uni-app` 全端，这得益于 `uni-helper` 团队开发的 `@uni-helper/axios-adapter` 插件。

## 特性
- 兼容 `uni-app` 全端
- 支持 `多域名` 配置
- 支持请求 `防抖`
- 支持全局 `Loading` 开启关闭及 `单个接口` 开启关闭
- 支持全局开启异常 `Toast` 提示, 及 `单个接口` 开启关闭
  
## 请求配置
在使用之前，我们先来了解 `axios` 相关配置，配置文件在 `env/.env` 和具体环境配置文件中
- **`.env`** - 全环境生效，一些公共的配置可以配置在 `.env` 中
- **`.env.development`** - 开发环境配置，运行 `dev` 时生效
- **`.env.production`** - 生产环境配置，运行 `build` 时生效
- **`.env.test`** - 测试环境配置，运行 `test` 时生效

::: warning 注意
本篇主要介绍 `axios` 请求相关配置，具体配置请查阅 `环境配置篇` ! 修改 `.env` 及其他环境配置文件时需要 `重启` 项目， 否则不生效！
:::

### .env 配置说明
请求公共配置及参数说明如下，请结合自己的业务进行修改
```sh
# 请求相关配置
# 设置TOKEN的key值 默认为 token
VITE_TOKEN_KEY = 'token'
# 设置状态码参数值 默认为 code 根据自己的业务编码修改
VITE_RESPONSE_CODE_KEY = 'code'
# 设置状态码参数值 默认为 msg 根据自己的业务编码修改
VITE_RESPONSE_MSG_KEY = 'msg'
# 请求全局loading, 默认开启， 可以在接口中关闭
VITE_SHOW_LOADING = true
# 是否开启接口错误信息提示， 默认开启， 可以在接口中关闭
VITE_SHOW_ERROR = true

# 请求超时时间
VITE_REQUEST_TIMEOUT = 10000
# 请求头类型
VITE_CONTENT_TYPE = 'application/json;charset=UTF-8'
# 请求成功状态码
VITE_SUCCESS_CODE = [200, 0]

```
### .env.development 配置说明
开发环境配置及参数说明，请结合自己的业务进行修改, 服务器地址（ `VITE_SERVER_BASEURL` ）如果不区分环境的情况下，可以配置在 `.env` 中，所有环境通用

```sh
# 服务器地址
VITE_SERVER_BASEURL = 'https://xxx'

```
### .env.production 配置说明
生产环境配置及参数说明，请结合自己的业务进行修改
```sh
# 服务器地址
VITE_SERVER_BASEURL = 'https://xxx'
```

## 接口管理
接口管理在 `src/apis` 目录下，每个业务模块对应一个文件，如用户相关模块 `src/apis/user.ts`, 根据自己的业务进行调整。

## 使用示例
接口案例如下，具体参数根据自己的业务调整，这里以 `user` 模块为例，其他模块请自行调整

```ts
import { request } from '@/utils/request'
// 多域名情况配置， 默认为 `VITE_SERVER_BASEURL` 配置的域名，不需要填写baseURL
const { VITE_SERVER_BASEURL_2: baseURL } = import.meta.env;

export const getChannel = (params: any) => {
  return request({
    url: `/station/v1/channel/base/tree`,
    method: 'get',
    params,
    baseURL,
    loading: false,
    showError: false,
  });
};
```
`getChannel` 接口名称，建议名规则请求类型+接口名称（建议英文单词），如 `请求栏目频道`
  - 获取类型为`get`, 则名称为 ：`getChannel`
  - 删除类型为`delete`, 则名称为 ：`deleteChannel`
  - 修改类型为`update`, 则名称为 ：`updateChannel`
  - 新增类型为`add`, 则名称为 ：`addChannel`
> 根据自己的喜好命名，这里只是简单的举例，部分基础开发者对于命名很苦恼！

- `url` 为接口地址，如 `/station/v1/channel/base/tree`，这里开头的斜杠 `/` 取决于 `VITE_SERVER_BASEURL` 的配置，配置域名以斜杠结尾，则不需要，反之则加上。
- `method` 为请求类型，如 `get`、`post`、`put`、`delete` 等
- `params` 为请求参数，如 `{ id: 1 }`，注请求方式为`get`时，参数为 `params`，其他方式，参数为 `data`
- `baseURL` 为请求域名，默认为 `VITE_SERVER_BASEURL` 配置的域名，无需填写，如果需要多域名，则需要配置，如 `VITE_SERVER_BASEURL_2`，使用请看上面示例代码！
```sh
# env.development
VITE_SERVER_BASEURL_2 = 'https://xxx'
```
- `loading` 为是否开启loading，默认为 `true` 全局开启，不需要单独设置，可以设置为 `false`，表示不显示loading
> 注： 需要全局开启关闭请在 `.env` 配置文件中设置 `VITE_SHOW_LOADING` 为 `true` 或 `false`
- `showError` 为是否开启异常提示，默认为 `true` 全局开启，不需要单独设置，可以设置为 `false`，表示不显示异常提示
> 注： 需要全局开启关闭请在 `.env` 配置文件中设置 `VITE_SHOW_ERROR` 为 `true` 或 `false`
## 接口请求
```vue
<template>
  <button type="primary" @click="onGetChannel">获取栏目频道</button>
</template>

<script setup lang="ts">
import { getChannel } from '@/apis/user'

const onGetChannel = async () => {
  await getChannel({ id: 1 }).then((res) => {
    console.log(res)
  })
}
</script>
```
