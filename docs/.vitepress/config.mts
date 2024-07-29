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
              { text: 'Axios请求', link: 'axios' },
              { text: 'Request请求', link: 'request' },
              { text: 'Utils工具', link: 'utils' },
              { text: 'Pinia状态', link: 'pinia' },
              { text: '路由篇', link: 'router' },
              { text: '环境配置', link: 'env' },
              { text: 'i18n多语言', link: 'i18n' },
              { text: '微信云开发', link: 'wx-cloud' },
              { text: '更新日志', link: 'changelog' },
            ],
          },
          {
            text: '指南',
          },
        ],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
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
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
});
