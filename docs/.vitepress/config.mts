import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: 'snail-uni',
  description: 'uni-app最佳开发模版',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/intro' },
      { text: '文档', link: '/markdown-examples' },
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
              { text: '插件篇', link: 'uni-plugins' },
              { text: '图标篇', link: 'icon' },
              { text: '代码规范篇', link: 'code-style' },
              { text: 'UI篇', link: 'ui' },
              { text: 'axios请求', link: 'request' },
              { text: 'request请求', link: 'request' },
              { text: 'utils工具', link: 'utils' },
              { text: 'pinia状态', link: 'utils' },
              { text: '环境配置', link: 'utils' },
              { text: 'i18n多语言', link: 'utils' },
              { text: '微信云开发', link: 'utils' },
              { text: '更新日志', link: '/guide/changelog' },
            ],
          },
        ],
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
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
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
});
