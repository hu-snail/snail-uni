<script setup>
  import { useData } from 'vitepress';
  import DefaultTheme from 'vitepress/theme';
  import { nextTick, provide, onMounted } from 'vue';
  import HomePage from './components/HomePage.vue';

  const { isDark } = useData();

  onMounted(() => {
    console.log(window._hmt, '---');
    // document.documentElement.classList.add('rainbow');
  });

  function enableTransitions() {
    return 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  }

  provide('toggle-appearance', async ({ clientX: x, clientY: y }) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
    ];
    document;
    await document.startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;

    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
    );
  });
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <DefaultTheme.Layout>
    <template #home-features-after>
      <HomePage />
    </template>
    <template #layout-bottom>
      <div class="busuanzi-container">
        <span id="busuanzi_container_site_pv"> 本站总访问量<span id="busuanzi_value_site_pv"></span>次 </span>
        <span id="busuanzi_container_site_uv"> 本站总访客数<span id="busuanzi_value_site_uv"></span>人 </span>
        <span id="busuanzi_container_page_pv"> 本文总阅读量<span id="busuanzi_value_page_pv"></span>次 </span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
  .busuanzi-container {
    max-width: 1152px;
    padding: 25px 0;
    margin: 0 auto;
    color: var(--vp-c-text-2);
    #busuanzi_container_site_pv {
      margin-right: 10px;
    }
  }
</style>
