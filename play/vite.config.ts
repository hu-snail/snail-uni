import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
// docs: https://uni-helper.js.org/vite-plugin-uni-pages
import UniPages from '@uni-helper/vite-plugin-uni-pages';
// 与 @uni-helper/vite-plugin-uni-pages 插件一起使用
// docs:https://github.com/uni-helper/vite-plugin-uni-platform?tab=readme-ov-file#readme
import UniPlatform from '@uni-helper/vite-plugin-uni-platform';
// docs:https://github.com/uni-helper/vite-plugin-uni-manifest?tab=readme-ov-file#readme
import UniManifest from '@uni-helper/vite-plugin-uni-manifest';
// docs:https://github.com/uni-helper/vite-plugin-uni-layouts?tab=readme-ov-file#readme
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts';
// docs:https://github.com/antfu/vite-plugin-restart?tab=readme-ov-file#readme
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig({
  // 插件注意： Unixx需要在Uni()之前引入
  plugins: [
    // uni-app pages配置 会根据route配置，自动生成路由
    UniPages({
      // 排除组件文件
      exclude: ['**/components/**/**.*'],
      // 'json5' | 'json' | 'yaml' | 'yml', 具体使用参看文档：https://uni-helper.js.org/vite-plugin-uni-pages
      routeBlockLang: 'json5',
      dts: 'src/types/uni-pages.d.ts',
      // 配置分包目录
      subPackages: ['src/sub-pages'],
    }),
    UniPlatform(),
    UniLayouts(),
    UniManifest(),
    Uni(),

    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'src/types/auto-import.d.ts',
      eslintrc: { enabled: true },
      vueTemplate: true,
    }),

    ViteRestart({
      restart: ['vite.config.js'], // 监听vite.config.js文件修改,无需重启
    }),
  ],
});
