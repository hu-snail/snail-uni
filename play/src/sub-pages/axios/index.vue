<route type="page" lang="json">
{
  "style": { "navigationBarTitleText": "Axios 请求页", "backgroundColor": "#f5f5f5" }
}
</route>
<template>
  <view class="h-full">
    <wd-text tag="p" text="请求加载动画"></wd-text>
    <div class="item-content">
      <wd-button plain type="info" @click="handleGetData">请求数据</wd-button>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { getHotList } from '@/apis';
  const handleGetData = () => {
    getHotList({}).then((res: any) => {
      console.log(res);
    });
  };
</script>
