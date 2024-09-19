import { useUserStore } from '@/store';
import { isWhiteList } from '@/router';

const navigateToInterceptor = {
  invoke({ url }<% if (useTs) { %>: { url: string }<% } %>) {
    // 判断是否登录
    if (useUserStore().token) {
      return true;
    } else {
      const flag = isWhiteList(url);
      if (!flag) return uni.navigateTo({ url: '/sub-pages/login/index' });
      return flag;
    }
  },
};

export const routeInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', navigateToInterceptor);
    uni.addInterceptor('reLaunch', navigateToInterceptor);
    uni.addInterceptor('redirectTo', navigateToInterceptor);
  },
};
