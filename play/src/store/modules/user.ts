import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUserInfo } from '@/types/user';

const initUserState = {
  nickName: '微信用户',
  avatarUrl: '',
  userId: '',
  gender: 0,
};

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: ref<IUserInfo>({ ...initUserState }),
      Authorization: '11',
    };
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
  // 开始数据持久化 false 关闭
  persist: true,
  /**
   * 缓存指定参数
   * persist: ['Authorization']
   */
});
