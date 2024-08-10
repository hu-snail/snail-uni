import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';
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
export default ({ command, mode }) => {
  const env = loadEnv(mode, path.resolve(process.cwd(), 'env'));
  const {
    VITE_APP_PORT,
    VITE_SERVER_BASEURL,
    VITE_DELETE_CONSOLE,
    VITE_SHOW_SOURCEMAP,
    VITE_PROXY_ENABLED,
    VITE_PROXY_PREFIX,
  } = env;

  return defineConfig({
    // 配置别名
    resolve: {
      alias: {
        '@': path.join(process.cwd(), './src'),
      },
    },
    // 插件注意： Unixx需要在Uni()之前引入
    plugins: [
      // uni-app pages配置 会根据route配置，自动生成路由
      UniPages({
        // 排除组件文件
        exclude: ['**/components/**/**.*'],
        // 'json5' | 'json' | 'yaml' | 'yml', 具体使用参看文档：https://uni-helper.js.org/vite-plugin-uni-pages
        routeBlockLang: 'json5',
        // 配置分包目录
        subPackages: ['src/sub-pages'],
      }),
      UniPlatform(),
      UniLayouts(),
      UniManifest(),
      Uni(),

      AutoImport({
        imports: [
          'vue',
          'uni-app',
          {
            from: 'uni-mini-router',
            imports: ['createRouter', 'useRouter', 'useRoute'],
          },
        ],
        eslintrc: { enabled: true, globalsPropValue: true },
        vueTemplate: true,
      }),

      ViteRestart({
        restart: ['vite.config.js'], // 监听vite.config.js文件修改,无需重启
      }),
    ],
    // 开发配置
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: Number.parseInt(VITE_APP_PORT, 10),
      // h5端配置跨域配置，配置文件.env进行开启关闭
      proxy: JSON.parse(VITE_PROXY_ENABLED)
        ? {
            [VITE_PROXY_PREFIX]: {
              target: VITE_SERVER_BASEURL,
              changeOrigin: true,
              rewrite: (path) => path.replace(new RegExp(`^${VITE_PROXY_PREFIX}`), ''),
            },
          }
        : undefined,
    },
    // 构建配置
    build: {
      sourcemap: JSON.parse(VITE_SHOW_SOURCEMAP),
      target: 'es6',
      // 开发环境不用压缩
      minify: mode === 'development' ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: JSON.parse(VITE_DELETE_CONSOLE),
          drop_debugger: true,
        },
      },
    },
  });
};
