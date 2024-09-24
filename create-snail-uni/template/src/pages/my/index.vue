<route lang="json">
{<% if (useTabbar) { %>
  "layout": "tabbar",<% } %>
  "style": { "navigationBarTitleText": "我的" },
  "name": "my"
}
</route>
<template>
  <view class="content"> 我的页面 </view>
</template>

<script setup<% if (useTs) { %> lang="ts"<% } %>></script>
