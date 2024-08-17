import { defineStore } from 'pinia';

import { IUserInfo } from '@/types/user';

const initUserState = <IUserInfo>{
  nickName: '',
  avatarUrl: '',
  userId: '',
  gender: 0,
};

export const useUserStore = defineStore('user', {
  state() {
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
    setUserInfo(data: IUserInfo) {
      this.userInfo = data;
    },

    /** 设置请求token */
    setToken(token: string) {
      this.Authorization = token;
    },
  },

  // persist: true, // 默认缓存state全部参数

  // 缓存指定参数
  // persist: {
  //   key: 'user', // 缓存key, 默认当前模块
  //   paths: ['Authorization'],
  // },
});
