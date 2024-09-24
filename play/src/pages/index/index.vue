<route type="home" lang="json">
{
  "layout": "tabbar",
  "style": { "navigationBarTitleText": "首页" },
  "name": "home"
}
</route>

<template>
  <view class="app-container">
    <view class="header-wrap">
      <view class="header-logo">
        <view class="logo">
          <image w-60rpx h-60rpx src="/static/logo.png" />
        </view>
        <text class="title">Snail Uni App</text>
      </view>
      <view class="header-desc">
        <wd-text
          text="专为开发者打造的 UniApp 框架模板。 基于 UniApp + Vue3 + TypeScript + Vite + Wot Design Uni 的高效框架模板。它内置了 Snail-Uni 脚手架工具，帮助您快速创建 TypeScript 或 JavaScript 版本项目。Snail-Uni 配备了丰富的开箱即用配置，让您从一开始就拥有高效的开发体验。"
        ></wd-text>
      </view>
      <view class="switch">
        <wd-text text="开启/关闭暗黑模式"></wd-text>
        <wd-switch size="20px" v-model="isDark" />
      </view>
    </view>

    <wd-cell-group border>
      <wd-cell title="路由跳转" is-link to="/pages/index/index" />
      <wd-cell title="登录拦截" is-link to="/pages/index/index" />
      <wd-cell title="Pinia 状态" is-link to="/pages/index/index" />
      <wd-cell title="Axios 请求" is-link to="/pages/index/index" />
      <wd-cell title="文件上传" is-link to="/pages/index/index" />
      <wd-cell title="分享设置" is-link to="/pages/index/index" />
      <wd-cell title="常用模版" is-link to="/pages/index/index" />
      <wd-cell title="自定义Tabbar" is-link to="/pages/index/index" />
      <wd-cell title="自定义Navbar" is-link to="/pages/index/index" />
      <wd-cell title="文档地址" is-link to="/pages/index/index" />
    </wd-cell-group>
  </view>
</template>

<script setup lang="ts">
  import { useUserStore, useCounterStore } from '@/store';
  const userStore = useUserStore();
  const counterStore = useCounterStore();
  const isDark = ref(true);

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

<style lang="scss" scoped>
  .app-container {
    width: 100vw;
    overflow-y: auto;
    .header-wrap {
      padding: 60rpx 50rpx;
      .header-logo {
        display: flex;
        align-items: center;
        .title {
          padding-left: 20rpx;
          font-size: 40rpx;
          font-weight: bold;
          color: #5474f2;
        }
      }
      .switch {
        display: flex;
        align-items: center;
        padding: 15px 0;
      }
    }
  }
</style>
