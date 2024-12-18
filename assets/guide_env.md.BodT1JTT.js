import{_ as i,c as a,a3 as n,o as e}from"./chunks/framework.CvjUncBj.js";const r=JSON.parse('{"title":"环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/env.md","filePath":"guide/env.md","lastUpdated":1724750392000}'),l={name:"guide/env.md"};function p(t,s,h,d,k,o){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><ul><li><strong>配置文件</strong><ul><li><code>.env</code> 全局生效</li><li><code>env.development</code> 开发环境</li><li><code>env.production</code> 生产环境</li><li><code>env.test</code> 测试环境</li></ul></li></ul><h2 id="env-配置" tabindex="-1">.env 配置 <a class="header-anchor" href="#env-配置" aria-label="Permalink to &quot;.env 配置&quot;">​</a></h2><p><code>.env</code> 配置文件全局生效，层级低于 <code>env.development</code>、<code>env.production</code>、<code>env.test</code>， 相同的变量具体环境修改之后会覆盖全局配置。</p><details class="details custom-block"><summary>查看代码</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 需要修改成自己配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_UNI_APPID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_WX_APPID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;wx7dadae3892915697&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://uniapp.dcloud.net.cn/tutorial/i18n.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://uniapp.dcloud.net.cn/api/ui/locale.html#onlocalechange 打开页面后最下面的注意事项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_FALLBACK_LOCALE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zh-Hans&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求相关配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置TOKEN的key值 默认为 token</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_TOKEN_KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;token&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置状态码参数值 默认为 code 根据自己的业务编码修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_RESPONSE_CODE_KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;code&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置状态码参数值 默认为 msg 根据自己的业务编码修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_RESPONSE_MSG_KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;msg&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求全局loading，默认开启， 可以在接口中关闭</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SHOW_LOADING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启接口错误信息提示， 默认开启， 可以在接口中关闭</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SHOW_ERROR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上传地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_UPLOAD_BASEURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://xxx&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求超时时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_REQUEST_TIMEOUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求头类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_CONTENT_TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;application/json;charset=UTF-8&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求成功状态码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SUCCESS_CODE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [200，0]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># h5是否需要配置代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_PROXY_ENABLED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_PROXY_PREFIX</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/api&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_APP_PUBLIC_BASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_APP_PORT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8090</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 路由相关配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启登录拦截 默认开启，在src/router/white-list.ts中配置免登录路由 适合大部分需要登录的场景</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为false关闭后，需要设置不需要登录的路由，适合大部分不需要登录的场景</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 根据自己的业务需求进行修改调整</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_OPNE_NO_LOGIN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div></details><p><strong>参数说明</strong></p><p><strong>注意</strong>： 添加环境变量参数规则：<code>VITE_</code> + <code>变量名</code> + <code>_KEY</code></p><ul><li><code>VITE_UNI_APPID</code>: <code>UnionID</code> 是微信小程序开放平台为开发者提供的用于识别用户的重要标识符。在同一主体下的小程序之间，UnionID是唯一的，即不同的开发者主体拥有不同的UnionID。因此，在需要识别用户来源或统计不同小程序之间的用户数据时，UnionID非常有用。</li></ul><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>UnionID</code> 获取途径： 绑定了开发者账号的小程序，可以通过以下途径获取 UnionID。</p><p>1.开发者可以直接通过 <code>wx.login</code> + code2Session 获取到该用户 <code>UnionID</code>，无须用户授权。</p><p>2.小程序端调用云函数时，可在云函数中通过 <code>Cloud.getWXContext</code> 获取 <code>UnionID</code>。 <strong>微信开放平台绑定小程序流程</strong> 登录<a href="https://open.weixin.qq.com/" target="_blank" rel="noreferrer">微信开放平台</a> — 管理中心 — 小程序 — 绑定小程序</p></div><ul><li><code>VITE_WX_APPID</code>: 登录微信小程序 <code>appid</code>，用于微信小程序登录。</li></ul><blockquote><p>获取方式：登录<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">微信小程序后台</a> — 开发管理 — 开发设置 — 开发者ID - AppID(小程序ID)</p></blockquote><ul><li><code>VITE_FALLBACK_LOCALE</code>: 默认语言，默认为中文。</li><li><code>VITE_TOKEN_KEY</code>: 存储 token 的 key 值，默认为 <code>token</code>，根据的业务需求修改。比如：<code>Authorization</code></li><li><code>VITE_RESPONSE_CODE_KEY</code>: 状态码参数值，默认为 <code>code</code>，根据的业务需求修改。比如：<code>status</code></li><li><code>VITE_RESPONSE_MSG_KEY</code>: 状态码参数值，默认为 <code>msg</code>，根据的业务需求修改。比如：<code>message</code></li><li><code>VITE_SHOW_LOADING</code>: 是否开启请求全局loading，默认开启，可以根据自己的业务需求修改。</li><li><code>VITE_SHOW_ERROR</code>: 是否开启接口错误信息提示，默认开启，可以根据自己的业务需求修改。</li><li><code>VITE_UPLOAD_BASEURL</code>: 上传地址，默认为 <code>https://xxx</code>，当具体接口需要上传文件时，需要配置此项。</li><li><code>VITE_REQUEST_TIMEOUT</code>: 请求超时时间，默认为 <code>10000</code>，根据自己的业务需求修改。</li><li><code>VITE_CONTENT_TYPE</code>: 请求头类型，默认为 <code>application/json;charset=UTF-8</code>，根据自己的业务需求修改。</li><li><code>VITE_SUCCESS_CODE</code>: 请求成功状态码，默认为 <code>200，0</code>，根据自己的业务需求修改。</li><li><code>VITE_PROXY_ENABLED</code>: 是否开启代理，默认为 <code>false</code>，根据自己的业务需求修改。</li><li><code>VITE_PROXY_PREFIX</code>: 代理前缀，默认为 <code>/api</code>，根据自己的业务需求修改。</li><li><code>VITE_APP_PUBLIC_BASE</code>: 应用根路径，默认为 <code>/</code>，根据自己的业务需求修改。</li><li><code>VITE_APP_PORT</code>: 应用端口，默认为 <code>8090</code>，根据自己的业务需求修改。</li><li><code>VITE_OPNE_NO_LOGIN</code>: 是否开启登录拦截，默认为 <code>true</code>，根据自己的业务需求修改。</li></ul><h2 id="env-development-配置" tabindex="-1">.env.development 配置 <a class="header-anchor" href="#env-development-配置" aria-label="Permalink to &quot;.env.development 配置&quot;">​</a></h2><p>开发环境配置，如果 <code>.env.development</code> 配置与 <code>.env</code> 配置相同，运行开发环境时，会覆盖 <code>.env</code> 配置。</p><details class="details custom-block"><summary>查看代码</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 变量必须以 VITE_ 为前缀才能暴露给外部读取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NODE_ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;development&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否去除console 和 debugger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_DELETE_CONSOLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启sourcemap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SHOW_SOURCEMAP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SERVER_BASEURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://xxx&#39;</span></span></code></pre></div></details><p><strong>参数说明</strong></p><ul><li><code>NODE_ENV</code>: 当前环境变量，默认为 <code>development</code>，不需要修改。</li><li><code>VITE_DELETE_CONSOLE</code>: 是否去除console 和 debugger，默认为 <code>false</code>， 根据自己的业务需求修改。</li><li><code>VITE_SHOW_SOURCEMAP</code>: 是否开启sourcemap，默认为 <code>true</code>， 根据自己的业务需求修改。</li><li><code>VITE_SERVER_BASEURL</code>: 服务器地址，默认为 <code>https://xxx</code>， 如果只有一个服务器地址，直接配置在 <code>.env</code> 配置文件中。</li></ul><h2 id="env-production-配置" tabindex="-1">.env.production 配置 <a class="header-anchor" href="#env-production-配置" aria-label="Permalink to &quot;.env.production 配置&quot;">​</a></h2><p>生产环境配置，如果 <code>.env.production</code> 配置与 <code>.env</code> 配置相同，运行生产环境时，会覆盖 <code>.env</code> 配置。</p><details class="details custom-block"><summary>查看代码</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 变量必须以 VITE_ 为前缀才能暴露给外部读取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NODE_ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否去除console 和 debugger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_DELETE_CONSOLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启sourcemap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SHOW_SOURCEMAP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SERVER_BASEURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://xxx&#39;</span></span></code></pre></div></details><p><strong>参数说明</strong></p><ul><li><code>NODE_ENV</code>: 当前环境变量，默认为 <code>production</code>，不需要修改。</li><li><code>VITE_DELETE_CONSOLE</code>: 是否去除console 和 debugger，默认为 <code>true</code>， 根据自己的业务需求修改。</li><li><code>VITE_SHOW_SOURCEMAP</code>: 是否开启sourcemap，默认为 <code>false</code>， 根据自己的业务需求修改。</li><li><code>VITE_SERVER_BASEURL</code>: 服务器地址，默认为 <code>https://xxx</code>， 如果只有一个服务器地址，直接配置在 <code>.env</code> 配置文件中。</li></ul><h2 id="env-test-配置" tabindex="-1">.env.test 配置 <a class="header-anchor" href="#env-test-配置" aria-label="Permalink to &quot;.env.test 配置&quot;">​</a></h2><p>测试环境配置，如果 <code>.env.test</code> 配置与 <code>.env</code> 配置相同，运行测试环境时，会覆盖 <code>.env</code> 配置。</p><details class="details custom-block"><summary>查看代码</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 变量必须以 VITE_ 为前缀才能暴露给外部读取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NODE_ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;test&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否去除console 和 debugger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_DELETE_CONSOLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启sourcemap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SHOW_SOURCEMAP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_SERVER_BASEURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://xxx&#39;</span></span></code></pre></div></details><p><strong>参数说明</strong></p><ul><li><code>NODE_ENV</code>: 当前环境变量，默认为 <code>test</code>，不需要修改。</li><li><code>VITE_DELETE_CONSOLE</code>: 是否去除console 和 debugger，默认为 <code>true</code>， 根据自己的业务需求修改。</li><li><code>VITE_SHOW_SOURCEMAP</code>: 是否开启sourcemap，默认为 <code>false</code>， 根据自己的业务需求修改。</li><li><code>VITE_SERVER_BASEURL</code>: 服务器地址，默认为 <code>https://xxx</code>， 如果只有一个服务器地址，直接配置在 <code>.env</code> 配置文件中。</li></ul>`,27)]))}const E=i(l,[["render",p]]);export{r as __pageData,E as default};
