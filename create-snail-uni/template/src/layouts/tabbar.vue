<template><% if (uiType === 'Wot-Design') { %>
  <wd-config-provider theme="light" :theme-vars="themeVars"><% } %>
    <view class="tabbar-app-layout" :style="{ height: `calc(100vh - ${tabbarHeight}px)` }">
      <slot />
      <wd-toast />
      <wd-message-box />
      <su-tabbar ref="tabbarRef" fixed :active="1" />
    </view><% if (uiType === 'Wot-Design') { %>
  </wd-config-provider><% } %>
</template>

<script setup lang="ts"><% if (useTs && uiType === 'Wot-Design') { %>
  import type { ConfigProviderThemeVars } from 'wot-design-uni';<% } %><% if (uiType === 'Wot-Design') { %>
  const themeVars<% if (useTs) { %>: ConfigProviderThemeVars<% } %> = {
    colorTheme: '#5474f2',
  };
  <% } %>
  const tabbarRef = ref(null);
  const tabbarHeight = ref(0);
  onLoad(() => {
    nextTick(() => {
      uni
        .createSelectorQuery()
        .in(tabbarRef.value)
        .select('.su-tabbar')
        .boundingClientRect((rect: any) => {
          tabbarHeight.value = rect.height;
        })
        .exec();
    });
  });
</script>

<style lang="scss" scoped>
  .tabbar-app-layout {
    display: flex;
    flex-direction: column;
  }
</style>
