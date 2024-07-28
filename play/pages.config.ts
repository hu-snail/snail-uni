import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
});
