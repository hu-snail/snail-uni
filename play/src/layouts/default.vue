<template>
  <view class="defaul-app-layout">
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>

<style lang="scss" scoped>
  .defaul-app-layout {
    height: 100vh;
    background-color: #f5f5f5;
  }
</style>
