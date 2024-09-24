<template>
  <view class="su-tabbar" :class="{ 'su-tabbar__placeholder': fixed }">
    <block v-for="item in tabbarList" :key="item.path">
      <view
        class="su-tabbar__item"
        :class="{ active: currentPath === item.pagePath, protrusion: item.isProtrusion }"
        @click="selectTabBar(item)"
      >
        <view class="su-tabbar__item_icon">
          <image
            v-if="item.iconType === 'image' || !item.iconType"
            :src="currentPath === item.pagePath ? item.selectedIconPath : item.iconPath"
          ></image>
          <view v-if="item.iconType === 'iconfont'" class="iconfont" :class="item.icon" />
          <wd-icon v-if="item.iconType === 'ui'" size="50rpx" :name="item.icon" />
        </view>
        <text class="su-tabbar__item_title">{{ item.text }}</text>
      </view>
    </block>
  </view>
</template>

<script lang="ts" setup>
  import { tabBar } from '@/pages.json';
  const tabbarList = tabBar.list.map((item) => ({ ...item, path: `/${item.pagePath}` }));
  <% if (useTs) { %>
  interface IRouter {
    route: string;
    path: string;
    pagePath: string;
    text: string;
    iconPath: string;
    selectedIconPath: string;
  }<% } %>
  defineProps({
    fixed: {
      type: Boolean,
      default: false,
    },
  });

  const currentPath = computed(() => {
    return getCurrentPages()[getCurrentPages().length - 1].route;
  });

  const selectTabBar = ({ path: url } <% if (useTs) { %>: IRouter<% } %>) => {
    uni.switchTab({ url });
  };

  onLoad(() => {
    // #ifdef APP-PLUS | H5
    uni.hideTabBar({
      fail(err) {
        console.log('hideTabBar fail: ', err);
      },
      success(res) {
        console.log('hideTabBar success: ', res);
      },
    });
    // #endif
  });
</script>

<style lang="scss" scoped>
  .su-tabbar {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 15rpx;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid #f5f5f5;
    &__placeholder {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;

      &_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50rpx;
        height: 50rpx;
        color: #999;
        .img {
          width: 100%;
          height: 100%;
        }
        .iconfont {
          font-size: 50rpx;
        }
      }
      &_title {
        font-size: 30rpx;
        color: #999;
      }
      &.active {
        .su-tabbar__item_title,
        .su-tabbar__item_icon {
          color: var(--wot-color-theme);
        }
      }
      &.protrusion {
        .su-tabbar__item_icon {
          width: 100rpx;
          height: 100rpx;
          padding: 5px;
          margin-top: -70rpx;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-top: 1rpx solid #f5f5f5;
          border-radius: 100%;
        }
      }
    }
  }
</style>
