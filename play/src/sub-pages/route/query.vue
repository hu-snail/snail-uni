<route type="page" lang="json">
{
  "style": { "navigationBarTitleText": "路由参数" }
}
</route>
<template>
  <view class="content-wrap">
    <wd-text tag="p" text="路由参数信息"></wd-text>
    <view class="code">
      {{ paramsInfo }}
    </view>
    <wd-text tag="p" text="解析路由"></wd-text>
    <view class="code">
      {{ formattedRouterInfo }}
    </view>
  </view>
</template>

<script setup lang="ts">
  const router = useRouter();

  const paramsInfo = computed(() => {
    const params = router.route.value.query as any;
    return {
      ...params,
      email: decodeURIComponent(params.email),
      name: decodeURIComponent(params.name),
    };
  });

  const formattedRouterInfo = computed(() => {
    const routeInfo = router.route.value as any;
    for (let key in routeInfo.params) {
      routeInfo.params[key] = decodeURIComponent(routeInfo.params[key]);
    }
    for (let key in routeInfo.query) {
      routeInfo.query[key] = decodeURIComponent(routeInfo.query[key]);
    }
    routeInfo.fullPath = decodeURIComponent(routeInfo.fullPath);
    return JSON.stringify(router.route.value, null, 2).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });
</script>

<style lang="scss" scoped>
  .content-wrap {
    height: 100vh;
    padding: 60rpx 30rpx;
    background-color: #f5f5f5;
    .code {
      padding: 20rpx;
      margin: 10px 0;
      white-space: pre-wrap;
      background-color: #fff;
      border-radius: 10rpx;
    }
  }
</style>
