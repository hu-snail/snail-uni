# Pinia 状态管理

本篇将介绍 `Pinia` 全局状态管理(`Options API` 和 `Setup Store` 两种形式 )及两种数据持久化方法(`pinia-plugin-unistorage` 和 `pinia-plugin-persistedstate`) 其中 `pinia-plugin-unistorage` 是基于 `pinia-plugin-persistedstate` 封装的 `uni-app` 持久化插件。
- 相关文档
  - [Pinia](https://pinia.vuejs.org/)
  - [pinia-plugin-unistorage](https://github.com/dishait/pinia-plugin-unistorage?tab=readme-ov-file#readme)
  - [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)
  
::: warning 提示
 `snail-uni` 默认集成 `pinia-plugin-unistorage` 数据持久化，本篇会介绍`pinia-plugin-persistedstate` 的使用，根据个人喜好进行修改。
:::

## store 目录
```sh
├── store                        # 状态根目录
│   │── modules                  # 模块
│   │   │── counter.ts           # counter 模块
│   │   │── user.ts              # user 模块
│   │── index.ts                 # 导出所有模块
```
其中 `store/modules/counter.ts` 为 `Setup Store` 模式示例，`store/modules/user.ts` 为 `Options API` 模式示例。
## 选项式 API
选项式API示例代码如下 ：
::: code-group
```ts [typescript]
// store/modules/user.ts
import { defineStore } from 'pinia';

import { IUserInfo } from '@/types/user';

const initUserState = {
  nickName: '',
  avatarUrl: '',
  userId: '',
  gender: 0,
};

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: { ...initUserState } as IUserInfo,
      Authorization: 'SNAIL_UNI00000001',
    };
  },

  getters: {
    nickName: (state) => state.userInfo.nickName,
  },

  actions: {
    /** 设置用户信息 */
    setUserInfo(data: IUserInfo) {
      this.userInfo = data;
    },

    /** 设置请求token */
    setToken(token: string) {
      this.Authorization = token;
    },
  }
});

```
```js [javascript]
// store/modules/user.js
import { defineStore } from 'pinia';

const initUserState = {
  nickName: '',
  avatarUrl: '',
  userId: '',
  gender: 0,
};

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: { ...initUserState },
      Authorization: 'SNAIL_UNI00000001',
    };
  },

  getters: {
    nickName: (state) => state.userInfo.nickName,
  },

  actions: {
    /** 设置用户信息 */
    setUserInfo(data) {
      this.userInfo = data;
    },

    /** 设置请求token */
    setToken(token) {
      this.Authorization = token;
    },
  }
});

```
:::
- `useUserStore` 状态管理名称，建议命名规则：`use` + `名称` + `Store`
- defineStore(`'user'`, {}) 其中`user` 是Store 的唯一 ID
- `state` 定义状态变量， 推荐使用箭头函数：
```ts
export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'snail',
    lastName: 'uni',
  })
})
```
- `getter` 完全等同于 `store` 的 `state` 的计算值。可以通过 `defineStore()` 中的 `getters` 属性来定义它们。推荐使用箭头函数，并且它将接收 `state` 作为第一个参数：
```ts
export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'snail',
    lastName: 'uni',
  }),
  getters: {
    fullName: (state) => state.firstName + state.lastName,
  },
})
```
- `action` 定义方法,处理一些业务逻辑:
```ts
export const useUserStore = defineStore('user', {
  actions: {
    /** 设置用户信息 */
    setUserInfo(data: IUserInfo) {
      this.userInfo = data;
    },
  }
})
```
## 组合式 API
与 `Vue` 组合式 API 的 `setup` 函数 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。
::: code-group
```ts [typescript]
import { defineStore } from 'pinia';
// snail-uni 自动导入可以不用引入
import { ref } from 'vue';
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return { count, doubleCount, increment };
  }
);

```
```js [javascript]
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return { count, doubleCount, increment };
  }
);
```
:::
在 `Setup Store` 中：

- `ref()` 就是 `state` 属性
- `computed()` 就是 `getters`
- `function()` 就是 `actions`

注意，要让 `pinia` 正确识别 `state`，你必须在 `setup store` 中返回 `state` 的所有属性

::: tip 说明
`pinia` 语法糖选择和在 `Vue` 中如何选择`组合式 API` 与`选项式 API` 一样，选择你觉得最舒服的那一个就好。两种语法都有各自的优势和劣势。`Option Store` 更容易使用，而 `Setup Store` 更灵活和强大。详情查看[pinia文档](https://pinia.vuejs.org/zh/core-concepts/#what-syntax-should-i-pick)
:::
## 持久化存储插件
`snail-uni` 默认集成了 `pinia-plugin-unistorage` 持久化存储插件，该插件是 `pinia-plugin-persistedstate` 的 `uniapp` 版本。
### 配置
 `pinia-plugin-unistorage` 配置示例：
```ts
// src/main.ts
import { createSSRApp } from 'vue';
import App from './App.vue';

import * as Pinia from 'pinia'; // [!code ++]
// @docs https://github.com/dishait/pinia-plugin-unistorage?tab=readme-ov-file#readme
import { createUnistorage } from 'pinia-plugin-unistorage'; // [!code ++]

export function createApp() {
  const app = createSSRApp(App);
  const store = Pinia.createPinia(); // [!code ++]
  store.use(createUnistorage()); // [!code ++]
  app.use(store); // [!code ++]
  return {
    app,
    Pinia, // [!code ++] 
  };
}

```
注： 必须返回 `Pinia`， 否则不生效
### 使用示例
::: code-group
```ts [组合式 API]
import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return { count, doubleCount, increment };
  },
  {
    unistorage: true,
  },
);

```
```ts [选项式 API]
iimport { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++
    }
  },
  unistorage: true,
})
```
:::
使用说明：
- `unistorage` 属性为 `true` 时，缓存 `state` 所有数据, 默认为 `false`
- 缓存指定 `state` 参数
```ts
unistorage: {
  key: "counter", 
  paths: ["count"],
},
```
- `key` 缓存的键，默认为该 `store` 的 `id`，这里是 `counter`, 一般不需要修改，除非有特殊需求。
- `paths` 需要缓存的路径，这里设置 `count` 会被缓存
- 钩子
```ts 
unistorage: {
  // 初始化恢复前触发
  beforeRestore(ctx) {},
  // 初始化恢复后触发
  afterRestore(ctx) {},
},
```
- 序列化
```ts
unistorage: {
  serializer: {
    // 序列化，默认为 JSON.stringify
    serialize(v) {
      return JSON.stringify(v);
    },
    // 反序列化，默认为 JSON.parse
    deserialize(v) {
      return JSON.parse(v);
    },
  },
},
```
### 替换默认
在替换之前，需要先卸载默认插件：
::: code-group
```sh [npm]
npm uninstall pinia-plugin-unistorage
```
```sh [pnpm]
pnpm remove pinia-plugin-unistorage
```
```sh [yarn]
yarn remove pinia-plugin-unistorage
```
:::
再移除 `pinia-plugin-unistorage` 配置代码：
```ts
// src/main.ts
import { createSSRApp } from 'vue';
import App from './App.vue';

import * as Pinia from 'pinia'; // [!code --]
// @docs https://github.com/dishait/pinia-plugin-unistorage?tab=readme-ov-file#readme
import { createUnistorage } from 'pinia-plugin-unistorage'; // [!code --]

export function createApp() {
  const app = createSSRApp(App);
  const store = Pinia.createPinia(); // [!code --]
  store.use(createUnistorage()); // [!code --]
  app.use(store); // [!code --]
  return {
    app,
    Pinia, // [!code --] 
  };
}

```
以上步骤操作完之后，接下来安装新的持久化插件：`pinia-plugin-persistedstate`

::: code-group
```sh [npm]
npm install pinia-plugin-persistedstate
```
```sh [pnpm]
pnpm add pinia-plugin-persistedstate
```
```sh [yarn]
yarn add pinia-plugin-persistedstate
```
:::
配置 `pinia-plugin-persistedstate` 插件，在 `src/store/index.ts` 中添加以下配置：
```ts
import { createPinia } from 'pinia' 
import { createPersistedState } from 'pinia-plugin-persistedstate' 

const store = createPinia() 
store.use( 
  createPersistedState({ 
    storage: {
      getItem: uni.getStorageSync, 
      setItem: uni.setStorageSync, 
    }, 
  }), 
) 

export default store 
```
在 `src/main.ts` 中添加以下配置：
```ts
import { createSSRApp } from 'vue'
import store from './store' // [!code ++] 
export function createApp() {
  const app = createSSRApp(App)
  app.use(store) // [!code ++] 
  return {
    app,
  }
}

```
至此，`pinia-plugin-persistedstate` 插件替换完成。
- 使用示例：
::: code-group
```ts [组合式 API]
import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return { count, doubleCount, increment };
  },
  {
    persist: true,
  },
);

```
```ts [选项式 API]
iimport { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++
    }
  },
  persist: true,
})
```
:::
- `key` 配置
```ts
persist: {
  key: "my-key", // 默认为该 store 的 id，这里是 my-key
}
```
- `paths` 配置
```ts
persist: {
  paths: ["count"],
}
```
该 `store` 中, 只有 `count` 被持久化。

