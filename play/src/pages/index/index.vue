<route type="home" lang="json">
{
  "layout": "tabbar",
  "style": { "navigationBarTitleText": "SnailUni" },
  "name": "home"
}
</route>

<template>
  <view class="app-container">
    <view class="header-wrap">
      <view class="header-logo">
        <view class="logo">
          <wd-img :width="80" :height="80" src="/static/logo.png" />
        </view>
        <view class="header-desc">
          <view class="title">
            SnailUni
            <wd-text text="foruni-app"></wd-text>
          </view>
          <wd-text text="更懂你的uni-app框架" size="12px"></wd-text>
        </view>
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
    background-color: #f5f5f5;
    .header-wrap {
      padding: 60rpx 50rpx;
      .header-logo {
        display: flex;
        align-items: center;
        .title {
          padding-left: 20rpx;
          font-size: 60rpx;
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
