import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'counter',
  () => {
    // 类似 state
    const count = ref(0);
    // 类似 getters
    const doubleCount = computed(() => count.value * 2);
    // 类似 actions
    function increment() {
      count.value++;
    }

    // 必须返回state、getters、actions
    return { count, doubleCount, increment };
  },
  {
    persist: true,
  },
);
