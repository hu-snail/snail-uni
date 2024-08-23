import { defineStore } from 'pinia';

import { IUserInfo } from '@/types/user';

const initUserState = <IUserInfo>{
  nickName: '',
  avatarUrl: '',
  userId: '',
  gender: 0,
};

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: { ...initUserState },
    token: '',
  }),

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
      this.token = token;
    },
  },

  unistorage: true,

  // 缓存指定参数
  //  unistorage: {
  //   key: 'user', // 缓存key, 默认当前模块
  //   paths: ['Authorization'],
  // },
});
