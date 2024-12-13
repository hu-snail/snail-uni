import { createSSRApp } from 'vue';
import App from './App.vue';
import router, { routeInterceptor } from './router';
import 'virtual:uno.css';

import * as Pinia from 'pinia';
// @docs https://github.com/dishait/pinia-plugin-unistorage?tab=readme-ov-file#readme
import { createUnistorage } from 'pinia-plugin-unistorage';

export function createApp() {
  const app = createSSRApp(App);
  const store = Pinia.createPinia();
  store.use(createUnistorage());
  app.use(router);
  app.use(routeInterceptor);
  app.use(store);
  return {
    app,
  };
}
