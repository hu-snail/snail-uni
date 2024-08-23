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
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      // '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
      // '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      // '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      // '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
      // '^tn-(.*)-(item|group)$': '@tuniao/tnui-vue3-uniapp/components/$1/src/$1-$2.vue',
      // '^tn-(.*)': '@tuniao/tnui-vue3-uniapp/components/$1/src/$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/logo.png',
        selectedIconPath: 'static/logo.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/logo.png',
        selectedIconPath: 'static/logo.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
});
