const { VITE_OPNE_NO_LOGIN } = import.meta.env;
/**
 * !!! 注： whiteListByPath 和 loginList不能同时生效
 * VITE_OPNE_NO_LOGIN 为true 设置whiteListByPath，反之设置loginList
 * 请根据自己的业务进行调整
 */
/** 免登录白名单（匹配路由 path） */
const whiteListByPath<% if (useTs) { %>: string[]<% } %> = ['/sub-pages/login/index'];

/** 需要登录的白名单 匹配路由 path） 如：['/sub-pages/detail/index'] */
const loginList<% if (useTs) { %>: string[]<% } %> = [];

/** 判断是否在白名单 */
export const isWhiteList = (to<% if (useTs) { %>: any<% } %>) => {
  if (JSON.parse(VITE_OPNE_NO_LOGIN)) return whiteListByPath.indexOf(to) !== -1;
  else {
    return loginList.indexOf(to) === -1;
  }
};
