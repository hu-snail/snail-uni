import {
  Preset,
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  SourceCodeTransformer,
} from 'unocss';

// @docs https://github.com/unocss-applet/unocss-applet/tree/main
/** 在小程序(UniApp 和 Taro)中使用UnoCSS，兼容不支持的语法 */
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet';

// @docs https://unocss.dev/presets/legacy-compat
import presetLegacyCompat from '@unocss/preset-legacy-compat';

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false;
const transformers: SourceCodeTransformer[] = [];
const presets: Preset[] = [];
if (isApplet) {
  presets.push(presetApplet());
  presets.push(presetRemRpx());
  // 解决第三方样式冲突问题
  transformers.push(transformerAttributify({ prefixedOnly: true, prefix: 'sn' }));
} else {
  presets.push(presetApplet());
  presets.push(presetAttributify());
  presets.push(presetRemRpx({ mode: 'rpx2rem' }));
}

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
    }) as Preset,
  ],
  /**
   * 自定义快捷语句
   * @docs https://unocss.dev/config/shortcuts
   */
  shortcuts: [
    {
      'btn-green': 'border-rd-md text-white bg-green-500 hover:bg-green-700',
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
