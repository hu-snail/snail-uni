import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/snail-uni/',
  lang: 'zh-Hans',
  head: [
    ['meta', { name: 'author', content: 'hu-snail' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'uni-app, snail-uni, vite, vitepress, vue3',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['script', { src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', defer: '' }],
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e86ba2b14d9592ffd01c57ef4611af14";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
  `,
    ],
  ],
  title: 'snail-uni',
  description: 'uni-app最佳开发模版',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/intro' },
      {
        text: '开源作品',
        items: [
          { text: 'Vue3-resource', link: 'https://hu-snail.github.io/vue3-resource/' },
          { text: 'Vue3-admin-element-template', link: 'https://github.com/hu-snail/vue3-admin-element-template' },
          { text: 'Arco-admin-template', link: 'https://github.com/hu-snail/arco-admin-template' },
        ],
      },
      {
        text: '相关链接',
        items: [
          { text: 'Uni App 文档', link: 'https://uniapp.dcloud.net.cn/' },
          { text: 'Uni Helper 团队', link: 'https://github.com/uni-helper' },
          { text: 'Wot-design-uni 文档', link: 'https://wot-design-uni.pages.dev' },
          { text: 'Uv-ui 文档', link: 'https://www.uvui.cn/' },
          { text: 'Uview-plus 文档', link: 'https://uiadmin.net/uview-plus/' },
          { text: 'Pinia 文档', link: 'https://pinia.vuejs.org/zh/' },
          { text: 'uni-mini-router 文档', link: 'https://moonofweisheng.github.io/uni-mini-router/' },
        ],
      },
    ],

    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '指南',
            items: [
              { text: '介绍', link: 'intro' },
              { text: '快速上手', link: 'quick-start' },
              { text: '代码规范篇', link: 'code-style' },
              { text: '插件篇', link: 'uni-plugins' },
              { text: '图标篇', link: 'icon' },
              { text: 'UI选型篇', link: 'ui' },
              { text: 'UI使用篇', link: 'ui-use' },
              { text: 'Axios请求', link: 'axios' },
              // { text: 'Request请求', link: 'request' },
              // { text: 'Utils工具', link: 'utils' },
              { text: 'Pinia状态', link: 'pinia' },
              { text: '路由篇', link: 'router' },
              { text: '环境配置', link: 'env' },
              { text: '常见问题', link: 'question' },
              // { text: 'i18n多语言', link: 'i18n' },
              // { text: '微信云开发', link: 'wx-cloud' },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hu-snail/snail-uni' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#c71d23" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0m6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>`,
        },
        link: 'https://gitee.com/hu-snail/snail-uni',
        ariaLabel: 'Gitee',
      },
      {
        icon: {
          svg: `<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
        </svg>
        `,
        },
        link: 'https://juejin.cn/user/1662117310637757',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: '掘金',
      },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear() !== 2024 ? '2024 - ' + new Date().getFullYear() : new Date().getFullYear()}  hu-snail(蜗牛前端)`,
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
      options: {
        // make this `root` if you want to translate the default locale
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '输入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'esc',
            },
          },
        },
      },
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
});
