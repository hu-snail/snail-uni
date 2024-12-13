import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    function decrement() {
      count.value--;
    }
    return { count, doubleCount, increment, decrement };
  },
  {
    unistorage: true,
  },
);
