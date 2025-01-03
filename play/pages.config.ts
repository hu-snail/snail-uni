import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

/**
 * 全局配置
 */
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^su-(.*)': '@/components/su-$1.vue',
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
    color: '#99999',
    selectedColor: '#5474f2',
    backgroundColor: '#f5f5f5e6',
    borderStyle: 'white',
    height: '50px',
    fontSize: '12px',
    iconWidth: '24px',
    spacing: '3px',
    blurEffect: 'extralight',
    list: [
      {
        iconPath: '/static/tabbar/home_default.png',
        selectedIconPath: '/static/tabbar/home_active.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: '/static/tabbar/temp_default.png',
        selectedIconPath: '/static/tabbar/temp_active.png',
        pagePath: 'pages/template/index',
        text: '模版',
      },
      {
        iconPath: '/static/tabbar/my_default.png',
        selectedIconPath: '/static/tabbar/my_active.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
});
