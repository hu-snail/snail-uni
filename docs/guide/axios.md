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
