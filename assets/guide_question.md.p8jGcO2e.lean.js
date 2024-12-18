import{_ as i,c as a,a3 as t,o as n}from"./chunks/framework.CvjUncBj.js";const e="/snail-uni/assets/question1.B-Ms7R6B.jpg",l="/snail-uni/assets/question2.DR2ceNav.png",g=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/question.md","filePath":"guide/question.md","lastUpdated":1726109160000}'),h={name:"guide/question.md"};function p(o,s,k,d,r,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>本篇介绍了使用 <code>snail-uni</code> 中一些常见问题</p><h2 id="_1-pages-json-修改被覆盖-如何修改页面的-style-样式" tabindex="-1">1.pages.json 修改被覆盖, 如何修改页面的 <code>style</code> 样式 ? <a class="header-anchor" href="#_1-pages-json-修改被覆盖-如何修改页面的-style-样式" aria-label="Permalink to &quot;1.pages.json 修改被覆盖, 如何修改页面的 \`style\` 样式 ?&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">route</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;snail-uni&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;navigationBarTextStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;navigationBarBackgroundColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;backgroundColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;backgroundTextStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;light&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;navigationStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><code>navigationBarTitleText</code>: 页面标题</li><li><code>navigationBarTextStyle</code>: 标题颜色</li><li><code>navigationBarBackgroundColor</code>: 导航栏背景颜色</li><li><code>backgroundColor</code>: 页面背景颜色</li><li><code>backgroundTextStyle</code>: 页面背景文字颜色</li><li><code>navigationStyle</code>: 导航栏样式 <code>default</code>: 默认样式 <code>custom</code>: 自定义样式</li></ul><blockquote><p><strong>完整参数请查阅</strong> <a href="https://uniapp.dcloud.net.cn/collocation/pages?id=style" target="_blank" rel="noreferrer">style配置文档</a></p></blockquote><h2 id="_2-如何设置首页路由" tabindex="-1">2. 如何设置首页路由？ <a class="header-anchor" href="#_2-如何设置首页路由" aria-label="Permalink to &quot;2. 如何设置首页路由？&quot;">​</a></h2><p>在 <code>pages</code> 目录下的 <code>vue</code> 文件中设置 <code>type: home</code> 属性即可</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">route</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;home&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;首页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-首次运行正常-修改页面后报错" tabindex="-1">3. 首次运行正常，修改页面后报错？ <a class="header-anchor" href="#_3-首次运行正常-修改页面后报错" aria-label="Permalink to &quot;3. 首次运行正常，修改页面后报错？&quot;">​</a></h2><p>执行 <code>pnpm update</code> 命令，重新编译项目，即可解决该问题</p><p><img src="`+e+'" alt="运行报错"></p><h2 id="_4-语法报错类型-calss-string-的参数不能赋值给类型" tabindex="-1">4.语法报错类型“ {calss: string; }”的参数不能赋值给类型 <a class="header-anchor" href="#_4-语法报错类型-calss-string-的参数不能赋值给类型" aria-label="Permalink to &quot;4.语法报错类型“ {calss: string; }”的参数不能赋值给类型&quot;">​</a></h2><p>请查看 <code>Vue-Office</code> 是否是 <code>2.x</code>，如果是请卸载 <code>Vue-Office</code> 重新安装 <code>Vue-Office</code> 特定版本 <code>1.8x</code></p><p><img src="'+l+'" alt="语法报错"></p>',15)]))}const u=i(h,[["render",p]]);export{g as __pageData,u as default};