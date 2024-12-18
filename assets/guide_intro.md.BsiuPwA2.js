import{_ as i,c as a,a3 as n,o as h}from"./chunks/framework.CvjUncBj.js";const g=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md","lastUpdated":1724750948000}'),k={name:"guide/intro.md"};function l(p,s,t,e,F,d){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p><code>snail-uni</code> 是 <code>uniapp</code> 最佳的开发框架，使用最新的前端技术栈 <code>Vite5</code> + <code>Vue3</code> + <code>Ts</code> + <code>Uni Mini Router</code> + <code>UnoCss</code> 构建，让你可以使用 <code>Vscode</code> 编辑器进行高效编码，通过命令行方式即可运行 <code>web</code>、<code>小程序</code> 和 <code>App</code>, 无需依靠 <code>HBuilderX</code></p><blockquote><p>注：App 需要依赖 <code>HBuilderX</code></p></blockquote><p><code>snail-uni</code> 集成了 <code>Uni Mini Router</code>路由插件系统，让你可以使用 <code>vue-router</code>的方式进行路由交互, 内置了<code>常用组件</code>，<code>layout布局</code>，<code>请求封装</code>，<code>UnoCSS</code>，<code>i18n多语言</code>等基础功能。<code>snail-uni</code> 提供了专用的<code>脚手架工具</code>，通过命令方式即可创建不同启动模板，<code>snail-uni</code>集成了<code>Oxlint</code>最新的代码规范，更高效的检测代码质量。</p><div class="warning custom-block"><p class="custom-block-title">注意！！！</p><p><code>snail-uni</code> 这个版本主要是配合 <code>vscode</code> 开发工具的开发，关于 <code>HBuilderX</code> 相关的支持作者后续的版本会支持。</p></div><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>使用 <code>Vue3</code> + <code>Vite5</code> + <code>Ts</code> 等最新技术栈构建</li><li>采用 <code>pnpm</code> + <code>Monorepo</code> 模式构建</li><li>路由自动注册，无需手动配置路由，同时集成了<code>Uni Mini Router</code>路由插件系统</li><li>集成 <code>Oxlint</code> + <code>Eslint</code> 最新的代码规范，更高效的检测代码质量</li><li>宇宙最强编辑器<code>Vscode</code>，告别HBuilderX</li><li>支持<code>uni-app</code>、<code>vue3</code>、<code>pinia</code>、<code>uni mini router</code>自动导入</li><li>支持<code>i18n多语言</code>模式</li><li>支持<code>微信云开发</code></li></ul><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>本项目采用<code>pnpm</code> + <code>Monorepo</code> 模式，具体目录结构如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vscode</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # vscode 配置   </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 项目文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 项目包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snail-cli</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 脚手架工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snail-eslint-config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # eslint 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snail-request</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 请求封装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snail-utils</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 工具类封装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> play</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 演示文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 打包文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 运行环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 第三方插件库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 源文件        </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layouts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 布局文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 主页面文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sub-pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 分包页面文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 路由文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> static</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 静态资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> types</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # d.ts类型文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App.vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # App.vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.d.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # env.d.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 主要文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manifest.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # manifest 配置,根据manifest.config.ts 生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 小程序页面配置文件， 根据pages.config.ts 生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni.scss</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # uni全局样式 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .eslintrc-auto-import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # index.html </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manifest.config.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # manifest配置文件 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages.config.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # pages 配置文件 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # package.json 配置文件 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite.config.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # vite配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .editorconfig</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 编辑器配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .eslintignore</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # eslint 忽略文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .eslintrc.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # eslint 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .prettierignore</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # prettier 忽略文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # git 忽略文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # pnpm 锁文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-workspace.yaml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # pnpm 工作空间配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier.config.mjs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # prettier 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # ts 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verify-commit.mjs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 提交信息校验文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 说明文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # package.json</span></span></code></pre></div>`,10)]))}const c=i(k,[["render",l]]);export{g as __pageData,c as default};
