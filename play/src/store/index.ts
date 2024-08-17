// @docs https://pinia.vuejs.org/zh/
import { createPinia } from 'pinia';
// @docs https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
import { createPersistedState } from 'pinia-plugin-persistedstate';

const store = createPinia();
store.use(
  createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync,
    },
  }),
);

export default store;

export * from './modules/counter';
export * from './modules/user';
