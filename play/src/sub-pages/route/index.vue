<route type="page" lang="json">
{
  "style": { "navigationBarTitleText": "Router 路由跳转", "backgroundColor": "#f5f5f5" }
}
</route>
<template>
  <view class="content-wrap">
    <div v-for="(item, index) in list" :key="index" class="item">
      <wd-text tag="p" :text="item.text"></wd-text>
      <div class="item-content">
        <wd-button v-for="option in item.subList" :key="option.url" plain type="info" @click="handleToRouter(option)">{{
          option.text
        }}</wd-button>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  interface RouterItem {
    text: string;
    url: string;
    type: string;
    query?: Record<string, any>;
    method?:
      | 'push'
      | 'pushTab'
      | 'replace'
      | 'replaceAll'
      | 'back'
      | 'navigateTo'
      | 'redirectTo'
      | 'reLaunch'
      | 'switchTab'
      | 'navigateBack';
  }
  interface RouterList {
    text: string;
    subList: RouterItem[];
  }
  const list: RouterList[] = [
    {
      text: 'Uni-mini-router 路由',
      subList: [
        {
          text: '跳转至Tabbar页',
          url: 'pages/index/index',
          type: 'mini-router',
          method: 'pushTab',
        },
        {
          text: '跳转并关闭当前页',
          url: '/sub-pages/axios/index',
          type: 'mini-router',
          method: 'replace',
        },
        {
          text: '返回上一页',
          url: '/sub-pages/axios/index',
          type: 'mini-router',
          method: 'back',
        },
        {
          text: '跳转并关闭所有页',
          url: '/sub-pages/axios/index',
          type: 'mini-router',
          method: 'replaceAll',
        },
        {
          text: '跳转至Axios请求页',
          url: '/sub-pages/axios/index',
          type: 'mini-router',
          method: 'push',
        },
        {
          text: '路由传参',
          url: '/sub-pages/route/query',
          type: 'mini-router',
          query: {
            name: '张三',
            age: 18,
            author: 'hu-snail',
            email: '1217437592@qq.com',
          },
        },
      ],
    },
    {
      text: 'Uni-App 路由',
      subList: [
        {
          text: '跳转至Tabbar页',
          url: '/pages/index/index',
          type: 'uni-app',
          method: 'switchTab',
        },
        {
          text: '跳转并关闭当前页',
          url: '/sub-pages/axios/index',
          type: 'uni-app',
          method: 'redirectTo',
        },
        {
          text: '返回上一页',
          url: '/sub-pages/axios/index',
          type: 'uni-app',
          method: 'navigateBack',
        },
        {
          text: '跳转并关闭所有页',
          url: '/sub-pages/axios/index',
          type: 'uni-app',
          method: 'reLaunch',
        },
        {
          text: '跳转至Axios请求页',
          url: '/sub-pages/axios/index',
          type: 'uni-app',
          method: 'navigateTo',
        },
        {
          text: '路由传参',
          url: '/sub-pages/route/query',
          type: 'uni-app',
          query: {
            name: '张三',
            age: 18,
            author: 'hu-snail',
            email: '1217437592@qq.com',
          },
        },
      ],
    },
  ];

  const router = useRouter();

  const handleToRouter = (item: RouterItem) => {
    const { type, url: path, method, query } = item;
    if (type === 'mini-router') {
      switch (method) {
        case 'push':
          router.push({ path });
          break;
        case 'pushTab':
          router.pushTab({ path });
          break;
        case 'replace':
          router.replace({ path });
          break;
        case 'replaceAll':
          router.replaceAll({ path });
          break;
        case 'back':
          router.back();
          break;
        default:
          router.push({ path, query });
          break;
      }
    } else {
      switch (method) {
        case 'navigateTo':
          uni.navigateTo({ url: path });
          break;
        case 'redirectTo':
          uni.redirectTo({ url: path });
          break;
        case 'reLaunch':
          uni.reLaunch({ url: path });
          break;
        case 'switchTab':
          uni.switchTab({ url: path });
          break;
        case 'navigateBack':
          console.log(111);
          uni.navigateBack({ delta: 1 });
          break;
        default:
          if (!query) return uni.navigateTo({ url: path });
          const params = Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join('&');
          uni.navigateTo({ url: path + '?' + params });
          break;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .content-wrap {
    padding: 60rpx 30rpx;
    .item {
      margin-bottom: 10px;
      &-content {
        margin-top: 10px;
        :deep(.wd-button) {
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
