import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

/**
 * 全局配置
 */
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      <% if (uiType === 'Wot-Design') { %>'^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue'<% } %><% if (uiType === 'Uv-ui') { %>'^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue'<% } %><% if (uiType === 'Uview-plus') { %>"^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"<% } %><% if (uiType === 'TuniaoUI') { %>'^tn-(.*)-(item|group)$': '@tuniao/tnui-vue3-uniapp/components/$1/src/$1-$2.vue',
      '^tn-(.*)': '@tuniao/tnui-vue3-uniapp/components/$1/src/$1.vue'<% } %><% if (uiType === 'NutUI') { %>'^nut-(.*)?-(.*)': 'nutui-uniapp/components/$1$2/$1$2.vue',
      '^nut-(.*)': 'nutui-uniapp/components/$1/$1.vue'<% } %><% if (uiType === 'UniUI') { %>'^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue'<% } %><% if (uiType === 'Sard-ui') { %> "^sar-(.*)": "sard-uniapp/components/$1/$1.vue'<% } %>
    },
  }<% if (useTabbar) { %>,
  tabBar: {
    color: '#999999',
    selectedColor: '#5474f2',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: '/static/tabbar/home_default.png',
        selectedIconPath: '/static/tabbar/home_active.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: '/static/tabbar/my_default.png',
        selectedIconPath: '/static/tabbar/my_active.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },<% } %>
});
