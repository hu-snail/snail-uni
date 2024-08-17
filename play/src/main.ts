import { createSSRApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'virtual:uno.css';
import '@/styles/iconfont.css';

import * as Pinia from 'pinia';
import { createUnistorage } from 'pinia-plugin-unistorage';

export function createApp() {
  const app = createSSRApp(App);
  const store = Pinia.createPinia();
  store.use(createUnistorage());
  app.use(router);
  app.use(store);
  return {
    app,
    Pinia,
  };
}
