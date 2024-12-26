<!-- 使用 type="home" 属性设置首页 -->
<route type="home" lang="json">
{<% if (useTabbar) { %>
  "layout": "tabbar",<% } %>
  "style": { "navigationBarTitleText": "首页" },
  "name": "home"
}
</route>

<template>
  <view class="text-center m-4">
    <image class="h-40 w-40" src="/static/logo.png" />
    <view class="my-4">
      <text class="text-gray-400 font-bold">{{ title }}</text>
    </view>
    <view class="text-center font-bold text-4xl">
      {{ num }}
    </view>
    <view class="flex my-4">
      <button class="sn-btn-default" @click="handlePlus">
        <view class="sn-icon-park-outline:plus mr-1"></view>
        增加
      </button>
      <button class="sn-btn-default" @click="handleMinus">
        <view class="sn-icon-park-outline:minus mr-1"></view>
        减少
      </button>
    </view>
  </view>
</template>

<script setup<% if (useTs) { %> lang="ts"<% } %>>
const title = ref('Hello Snail-Uni App');

const router = useRouter();

import { useCounterStore } from '@/store';
const counterStore = useCounterStore();

const num = computed(() => counterStore.count);
const handlePlus = () => {
  counterStore.increment();
};

const handleMinus = () => {
  counterStore.decrement();
};

const handleToDetail = () => {
  router.push('/sub-pages/detail/index');
  // router.push({ name: 'Detail' }); 注：Detail 为<route>配置中的name参数，路由文档地址：https://hu-snail.github.io/snail-uni/guide/router.html
};
</script>
