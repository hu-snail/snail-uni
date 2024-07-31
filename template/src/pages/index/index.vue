<route type="home" lang="json">
{
  "style": { "navigationBarTitleText": "首页" },
  "name": "home"
}
</route>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <wd-button>主要按钮</wd-button>
    <wd-button type="success">成功按钮</wd-button>
    <wd-button type="info">信息按钮</wd-button>
    <wd-button type="warning">警告按钮</wd-button>
    <wd-button type="error">危险按钮</wd-button>
    <button type="button" @click="handleToRouter">我的页面</button>
  </view>
</template>

<script setup lang="ts">
  const title = ref('Hello');

  const router = useRouter();
  function handleToRouter() {
    router.push({ name: 'my' });
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 200rpx;
    height: 200rpx;
    margin-top: 200rpx;
    margin-right: auto;
    margin-bottom: 50rpx;
    margin-left: auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
