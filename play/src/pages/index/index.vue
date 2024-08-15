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
      <text class="title text-cyan-400">{{ title }}</text>
      <button class="icon" :class="iconName" />
      <i class="iconfont icon-xiaochengxu"></i>
    </view>
    <button class="btn-green">111</button>
    <wd-button>主要按钮</wd-button>
    <wd-button type="success">成功按钮</wd-button>
    <wd-button type="info">信息按钮</wd-button>
    <wd-button type="warning">警告按钮</wd-button>
    <wd-button type="error">危险按钮</wd-button>
  </view>
</template>

<script setup lang="ts">
  const iconName = ref('sn-icon-park-outline:add-four');
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
  .icon {
    font-size: 12px;
    color: #f45;
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
  }
</style>
