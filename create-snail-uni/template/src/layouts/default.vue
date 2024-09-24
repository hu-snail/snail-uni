<template>
  <view class="defaul-app-layout">
    <slot /><% if (uiType === 'Wot-Design') { %>
    <wd-toast />
    <wd-message-box /><% } %>
  </view>
</template>
