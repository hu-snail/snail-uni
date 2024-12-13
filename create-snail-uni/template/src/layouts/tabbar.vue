<template><% if (uiType === 'Wot-Design') { %>
  <wd-config-provider theme="light" :theme-vars="themeVars"><% } %>
    <view class="tabbar-app-layout">
      <slot /><% if (uiType === 'Wot-Design') { %>
      <wd-toast />
      <wd-message-box /><% } %>
    </view><% if (uiType === 'Wot-Design') { %>
  </wd-config-provider><% } %>
</template>

<script setup lang="ts"><% if (useTs && uiType === 'Wot-Design') { %>
  import type { ConfigProviderThemeVars } from 'wot-design-uni';<% } %><% if (uiType === 'Wot-Design') { %>
  const themeVars<% if (useTs) { %>: ConfigProviderThemeVars<% } %> = {
    colorTheme: '#5474f2',
  };
  <% } %>
</script>

<style lang="scss" scoped>
  .tabbar-app-layout {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>
