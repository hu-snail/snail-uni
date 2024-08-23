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
      <text class="username">{{ userInfo.nickName }}</text>
      <text class="title text-cyan-400">{{ title }}</text>
      <button class="icon" :class="iconName" />
      <i class="iconfont icon-xiaochengxu"></i>
    </view>
    <view>
      <text>{{ count }}</text>
    </view>
    <wd-button @click="handleIncrement">添加</wd-button>
    <wd-button @click="handleRequest">请求接口</wd-button>
    <button class="btn-green">111</button>
    <wd-button @click="handleSetToken">主要按钮</wd-button>
    <wd-button type="success" @click="handleToRouter">路由跳转</wd-button>
    <wd-button type="info">信息按钮</wd-button>
    <wd-button type="warning">警告按钮</wd-button>
    <wd-button type="error">危险按钮</wd-button>
  </view>
</template>

<script setup lang="ts">
  import { useUserStore, useCounterStore } from '@/store';
  const userStore = useUserStore();
  const counterStore = useCounterStore();

  import { getChannel } from '@/apis';

  const userInfo = computed(() => userStore.userInfo);
  const count = computed(() => counterStore.count);
  const iconName = ref('sn-icon-park-outline:add-four');
  const title = ref('Hello');

  const router = useRouter();
  function handleToRouter() {
    // uni.navigateTo({
    //   url: '/sub-pages/detail/index',
    // });
    router.push({ path: 'sub-pages/detail/index' });
  }

  function handleSetToken() {
    userStore.setToken('123456');
    console.log(userStore.nickName);
  }

  function handleIncrement() {
    counterStore.increment();
  }

  async function handleRequest() {
    const res = await getChannel({ stationId: 1 });
    console.log(res);
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
