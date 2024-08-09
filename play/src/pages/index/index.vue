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
    <uv-button type="primary" text="确定"></uv-button>
    <uv-button type="primary" :plain="true" text="镂空"></uv-button>
    <uv-button type="primary" :plain="true" :hairline="true" text="细边"></uv-button>
    <uv-button type="primary" disabled text="禁用"></uv-button>
    <uv-button type="primary" loading loadingText="加载中"></uv-button>
    <uv-button type="primary" icon="map" text="图标按钮"></uv-button>
    <uv-button type="primary" shape="circle" text="按钮形状"></uv-button>
    <uv-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></uv-button>
    <uv-button type="primary" size="small" text="大小尺寸"></uv-button>
    <view style="padding: 20px">
      <up-button type="primary" text="确定"></up-button>
      <up-button type="primary" :plain="true" text="镂空"></up-button>
      <up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
      <up-button type="primary" text="禁用"></up-button>
      <up-button type="primary" loading loadingText="加载中"></up-button>
      <up-button type="primary" icon="map" text="图标按钮"></up-button>
      <up-button type="primary" shape="circle" text="按钮形状"></up-button>
      <up-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></up-button>
      <up-button type="primary" size="small" text="大小尺寸"></up-button>
    </view>
    <tn-button type="primary">按钮</tn-button>
    <TnButton type="success">按钮</TnButton>
    <TnButton type="warning">按钮</TnButton>
    <TnButton type="danger">按钮</TnButton>
    <TnButton type="info">按钮</TnButton>
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
