# 环境配置

- **配置文件**
  - `.env` 全局生效
  - `env.development` 开发环境
  - `env.production` 生产环境
  - `env.test` 测试环境
  
## .env 配置

`.env` 配置文件全局生效，层级低于 `env.development`、`env.production`、`env.test`， 相同的变量具体环境修改之后会覆盖全局配置。

::: details 查看代码

```sh
# 需要修改成自己配置
VITE_UNI_APPID = ''
VITE_WX_APPID = 'wx7dadae3892915697'

# https://uniapp.dcloud.net.cn/tutorial/i18n.html
# https://uniapp.dcloud.net.cn/api/ui/locale.html#onlocalechange 打开页面后最下面的注意事项
VITE_FALLBACK_LOCALE = 'zh-Hans'


# 请求相关配置
# 设置TOKEN的key值 默认为 token
VITE_TOKEN_KEY = 'token'
# 设置状态码参数值 默认为 code 根据自己的业务编码修改
VITE_RESPONSE_CODE_KEY = 'code'
# 设置状态码参数值 默认为 msg 根据自己的业务编码修改
VITE_RESPONSE_MSG_KEY = 'msg'
# 请求全局loading，默认开启， 可以在接口中关闭
VITE_SHOW_LOADING = true
# 是否开启接口错误信息提示， 默认开启， 可以在接口中关闭
VITE_SHOW_ERROR = true

# 上传地址
VITE_UPLOAD_BASEURL = 'https://xxx'
# 请求超时时间
VITE_REQUEST_TIMEOUT = 10000
# 请求头类型
VITE_CONTENT_TYPE = 'application/json;charset=UTF-8'
# 请求成功状态码
VITE_SUCCESS_CODE = [200，0]

# h5是否需要配置代理
VITE_PROXY_ENABLED = false
VITE_PROXY_PREFIX = '/api'
VITE_APP_PUBLIC_BASE=/
VITE_APP_PORT = 8090

# 路由相关配置
# 是否开启登录拦截 默认开启，在src/router/white-list.ts中配置免登录路由 适合大部分需要登录的场景
# 设置为false关闭后，需要设置不需要登录的路由，适合大部分不需要登录的场景
# 根据自己的业务需求进行修改调整
VITE_OPNE_NO_LOGIN = true

```

:::

**参数说明**

**注意**： 添加环境变量参数规则：`VITE_` + `变量名` + `_KEY`

- `VITE_UNI_APPID`: `UnionID` 是微信小程序开放平台为开发者提供的用于识别用户的重要标识符。在同一主体下的小程序之间，UnionID是唯一的，即不同的开发者主体拥有不同的UnionID。因此，在需要识别用户来源或统计不同小程序之间的用户数据时，UnionID非常有用。
::: tip 说明
`UnionID` 获取途径：
绑定了开发者账号的小程序，可以通过以下途径获取 UnionID。

1.开发者可以直接通过 `wx.login` + code2Session 获取到该用户 `UnionID`，无须用户授权。

2.小程序端调用云函数时，可在云函数中通过 `Cloud.getWXContext` 获取 `UnionID`。
**微信开放平台绑定小程序流程**
登录[微信开放平台](https://open.weixin.qq.com/) — 管理中心 — 小程序 — 绑定小程序
:::

- `VITE_WX_APPID`: 登录微信小程序 `appid`，用于微信小程序登录。

> 获取方式：登录[微信小程序后台](https://mp.weixin.qq.com/) — 开发管理 — 开发设置 — 开发者ID - AppID(小程序ID)

- `VITE_FALLBACK_LOCALE`: 默认语言，默认为中文。
- `VITE_TOKEN_KEY`: 存储 token 的 key 值，默认为 `token`，根据的业务需求修改。比如：`Authorization`
- `VITE_RESPONSE_CODE_KEY`: 状态码参数值，默认为 `code`，根据的业务需求修改。比如：`status`
- `VITE_RESPONSE_MSG_KEY`: 状态码参数值，默认为 `msg`，根据的业务需求修改。比如：`message`
- `VITE_SHOW_LOADING`: 是否开启请求全局loading，默认开启，可以根据自己的业务需求修改。
- `VITE_SHOW_ERROR`: 是否开启接口错误信息提示，默认开启，可以根据自己的业务需求修改。
- `VITE_UPLOAD_BASEURL`: 上传地址，默认为 `https://xxx`，当具体接口需要上传文件时，需要配置此项。
- `VITE_REQUEST_TIMEOUT`: 请求超时时间，默认为 `10000`，根据自己的业务需求修改。
- `VITE_CONTENT_TYPE`: 请求头类型，默认为 `application/json;charset=UTF-8`，根据自己的业务需求修改。
- `VITE_SUCCESS_CODE`: 请求成功状态码，默认为 `200，0`，根据自己的业务需求修改。
- `VITE_PROXY_ENABLED`: 是否开启代理，默认为 `false`，根据自己的业务需求修改。
- `VITE_PROXY_PREFIX`: 代理前缀，默认为 `/api`，根据自己的业务需求修改。
- `VITE_APP_PUBLIC_BASE`: 应用根路径，默认为 `/`，根据自己的业务需求修改。
- `VITE_APP_PORT`: 应用端口，默认为 `8090`，根据自己的业务需求修改。
- `VITE_OPNE_NO_LOGIN`: 是否开启登录拦截，默认为 `true`，根据自己的业务需求修改。  

## .env.development 配置

开发环境配置，如果 `.env.development` 配置与 `.env` 配置相同，运行开发环境时，会覆盖 `.env` 配置。
::: details 查看代码

```sh
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'development'
# 是否去除console 和 debugger
VITE_DELETE_CONSOLE = false
# 是否开启sourcemap
VITE_SHOW_SOURCEMAP = true

# 服务器地址
VITE_SERVER_BASEURL = 'https://xxx'

```

:::
**参数说明**

- `NODE_ENV`: 当前环境变量，默认为 `development`，不需要修改。
- `VITE_DELETE_CONSOLE`: 是否去除console 和 debugger，默认为 `false`， 根据自己的业务需求修改。
- `VITE_SHOW_SOURCEMAP`: 是否开启sourcemap，默认为 `true`， 根据自己的业务需求修改。
- `VITE_SERVER_BASEURL`: 服务器地址，默认为 `https://xxx`， 如果只有一个服务器地址，直接配置在 `.env` 配置文件中。

## .env.production 配置

生产环境配置，如果 `.env.production` 配置与 `.env` 配置相同，运行生产环境时，会覆盖 `.env` 配置。
::: details 查看代码

```sh
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'production'
# 是否去除console 和 debugger
VITE_DELETE_CONSOLE = true
# 是否开启sourcemap
VITE_SHOW_SOURCEMAP = false

# 服务器地址
VITE_SERVER_BASEURL = 'https://xxx'

```

:::
**参数说明**

- `NODE_ENV`: 当前环境变量，默认为 `production`，不需要修改。
- `VITE_DELETE_CONSOLE`: 是否去除console 和 debugger，默认为 `true`， 根据自己的业务需求修改。
- `VITE_SHOW_SOURCEMAP`: 是否开启sourcemap，默认为 `false`， 根据自己的业务需求修改。
- `VITE_SERVER_BASEURL`: 服务器地址，默认为 `https://xxx`， 如果只有一个服务器地址，直接配置在 `.env` 配置文件中。

## .env.test 配置

测试环境配置，如果 `.env.test` 配置与 `.env` 配置相同，运行测试环境时，会覆盖 `.env` 配置。
::: details 查看代码

```sh
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'test'
# 是否去除console 和 debugger
VITE_DELETE_CONSOLE = true
# 是否开启sourcemap
VITE_SHOW_SOURCEMAP = false
# 服务器地址
VITE_SERVER_BASEURL = 'https://xxx'
```

:::
**参数说明**

- `NODE_ENV`: 当前环境变量，默认为 `test`，不需要修改。
- `VITE_DELETE_CONSOLE`: 是否去除console 和 debugger，默认为 `true`， 根据自己的业务需求修改。
- `VITE_SHOW_SOURCEMAP`: 是否开启sourcemap，默认为 `false`， 根据自己的业务需求修改。
- `VITE_SERVER_BASEURL`: 服务器地址，默认为 `https://xxx`， 如果只有一个服务器地址，直接配置在 `.env` 配置文件中。
