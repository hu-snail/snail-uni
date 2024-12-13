import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,<% if (useTs) { %>
  SourceCodeTransformer,
  Preset,<% } %>
} from 'unocss';

// @docs https://github.com/unocss-applet/unocss-applet/tree/main
/** 在小程序(UniApp 和 Taro)中使用UnoCSS，兼容不支持的语法 */
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet';

// @docs https://unocss.dev/presets/legacy-compat
import presetLegacyCompat from '@unocss/preset-legacy-compat';

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false;
const transformers<% if (useTs) { %>: SourceCodeTransformer[]<% } %> = [];
const presets<% if (useTs) { %>: Preset[]<% } %> = [];
if (isApplet) {
  // 解决第三方样式冲突问题
  transformers.push(transformerAttributify({ prefixedOnly: true, prefix: 'sn' })<% if (useTs) { %> as any<% } %>);
} else {
  presets.push(presetRemRpx({ mode: 'rpx2rem' })<% if (useTs) { %> as any<% } %>);
}

presets.push(presetApplet()<% if (useTs) { %> as any<% } %>);
presets.push(presetAttributify()<% if (useTs) { %> as any<% } %>);

export default defineConfig({
  presets: [
    ...presets,
    // 配置图标
    presetIcons({
      scale: 1.2,
      warn: true,
      prefix: 'sn-',
      autoInstall: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),

    // 兼容app端颜色值
    presetLegacyCompat({
      commaStyleColorFunction: true,
    })<% if (useTs) { %> as Preset<% } %>,
  ],
  /**
   * 自定义快捷语句
   * @docs https://unocss.dev/config/shortcuts
   */
  shortcuts: [
    {
      'sn-btn-default': 'text-gray-400 border-rd-20 after:border-none',
    },
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), ...transformers],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
});
