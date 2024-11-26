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
          <wd-img :width="80" :height="80" src="/static/logo.png" />
        </view>
        <view class="header-desc">
          <view>
            <wd-text text="Snail-Uni" bold size="26px" color="#000"></wd-text>
            <wd-text custom-class="tip" text="For UniApp" size="12px"></wd-text>
          </view>
          <wd-text text="更懂你的uni-app框架" size="13px"></wd-text>
        </view>
      </view>
    </view>
    <div class="cell-wrap">
      <div v-for="item in cellList" :key="item.type" class="cell-item" @click="handleToLink(item)">
        <text class="cell-item_title">{{ item.title }}</text>
        <wd-icon name="arrow-right" size="14px" color="#999"></wd-icon>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { useUserStore, useCounterStore } from '@/store';
  const userStore = useUserStore();
  const counterStore = useCounterStore();

  interface ICellItem {
    title: string;
    type: string;
  }

  const cellList: ICellItem[] = [
    {
      title: 'Router 路由跳转',
      type: 'route',
    },
    {
      title: 'Login 登录拦截',
      type: 'login',
    },
    {
      title: 'Pinia 状态',
      type: 'pinia',
    },
    {
      title: 'Axios 请求',
      type: 'axios',
    },
    {
      title: 'Share 分享设置',
      type: 'share',
    },
    {
      title: 'Tabbar 自定导航',
      type: 'tabbar',
    },
    {
      title: 'Upload 文件上传',
      type: 'upload',
    },
    {
      title: 'Icon 图标',
      type: 'icon',
    },
    {
      title: 'Navbar 自定义导航',
      type: 'navbar',
    },
    {
      title: 'Load 加载刷新',
      type: 'load',
    },
  ];

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

  const handleToLink = (item: ICellItem) => {
    const { type } = item;
    router.push({ path: `sub-pages/${type}/index` });
  };

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
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    width: 100vw;
    overflow-y: auto;
    .header-wrap {
      padding: 20rpx 30rpx;
      background-color: #fff;
      .header-logo {
        display: flex;
        align-items: center;
      }
      .header-desc {
        margin-left: 10px;
        :deep(.tip) {
          margin-left: 10px;
        }
      }
    }
    .cell-wrap {
      flex: 1;
      padding: 20rpx 30rpx;
      overflow-y: auto;
      background-color: #f5f5f5;
      border-top-left-radius: 40rpx;
      border-top-right-radius: 40rpx;
      .cell-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30rpx 40rpx;
        margin: 15rpx 0;
        background-color: #fff;
        border-radius: 60rpx;
        transition: background-color 0.2s ease;
        &:active {
          background-color: #f5f5f5;
        }
        &_title {
          font-weight: 600;
        }
      }
    }
  }
</style>
