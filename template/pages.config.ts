import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

/**
 * 全局配置
 */
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      <% if (uiType === 'Wot-Design') { %>'^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue'<% } %><% if (uiType === 'Uv-ui') { %>'^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue'<% } %><% if (uiType === 'Uview-plus') { %>"^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"<% } %>
    },
  },
});
