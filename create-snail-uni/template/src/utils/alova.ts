import { createAlova } from 'alova';
import type { Method } from 'alova';
import AdapterUniapp from '@alova/adapter-uniapp';
import VueHook from 'alova/vue';
import { useUserStore } from '@/store';

// 扩展 Method 类型以支持去重配置
declare module 'alova' {
  interface Meta {
    // 请求唯一标识
    requestKey?: string;
    // 是否跳过去重检查
    ignoreDuplicate?: boolean;
  }
}

const {
  VITE_SERVER_BASEURL: baseURL,
  VITE_REQUEST_TIMEOUT: timeout,
  VITE_CONTENT_TYPE,
  VITE_SUCCESS_CODE,
  VITE_SHOW_LOADING,
  VITE_SHOW_ERROR,
  VITE_RESPONSE_CODE_KEY,
  VITE_RESPONSE_MSG_KEY,
  VITE_TOKEN_KEY,
} = import.meta.env;

const tokenKey = VITE_TOKEN_KEY;
// 显示请求加载动画
const showLoading = JSON.parse(VITE_SHOW_LOADING);
// 队列请求数
let requestNum = 0;

// 重复请求
const pendingRequests = new Map<string, Method>();

export const useHttp = createAlova({
  baseURL,
  timeout,
  ...AdapterUniapp(),
  statesHook: VueHook,

  beforeRequest(method) {
    // 检查是否需要跳过去重检查
    if (method.meta?.ignoreDuplicate) return;

    Object.assign(method.config.headers, {
      ContentType: VITE_CONTENT_TYPE,
      Accept: 'application/json, text/plain, */*',
    });

    const { config } = method;

    // 处理认证问题，根据自己的业务逻辑配置
    const token = useUserStore().token;
    // tokenKey 是你在 env 中配置的 token 键名
    if (token) config.headers![tokenKey] = token;

    // 显示加载中
    const { loading = showLoading } = config.meta || {};
    if (loading) addLoading();

    const { url, type, data } = method;
    const requestKey = `${type}_${url}_${JSON.stringify(data)}`;

    // 存在相同请求则取消前一个
    if (pendingRequests.has(requestKey)) {
      pendingRequests.get(requestKey)?.abort();
    }
    pendingRequests.set(requestKey, method);
    method.meta.requestKey = requestKey;

    // 动态域名配置
    if (config.meta?.domain) {
      method.baseURL = config.meta.domain;
    }
  },

  responded: {
    onSuccess: async (response: any, method) => {
      const {
        config: {
          requestType,
          meta: { showError, loading },
        },
      } = method;

      const { statusCode, errMsg, data: rawData } = response;

      if (loading) removeLoading();

      // 上传下载请求处理
      if (requestType === 'upload' || requestType === 'download') {
        return response;
      }

      // 请求出错处理
      if (statusCode === -1) {
        uni.showToast({
          title: '服务器异常',
          duration: 2000,
        });
        throw new Error(`${errMsg}`);
      }
      if (JSON.parse(VITE_SUCCESS_CODE).indexOf(rawData[VITE_RESPONSE_CODE_KEY]) !== -1) {
        return rawData;
      } else {
        // 业务错误处理，根据自己的业务状态码调整
        if (showError) handleNetworkError(rawData[VITE_RESPONSE_CODE_KEY], rawData[VITE_RESPONSE_MSG_KEY]);
        else return Promise.reject(rawData);
      }
    },

    // 请求错误
    onError: async (error) => {
      removeLoading();
      handleNetworkError();
      return Promise.reject(error);
    },

    onComplete: async (method) => {
      removeLoading();
      // 处理请求完成逻辑
      const { requestKey } = method.meta;
      if (requestKey) pendingRequests.delete(requestKey);
    },
  },
});

const addLoading = () => {
  requestNum++;
  if (requestNum === 1 && showLoading) {
    uni.showLoading({
      title: '加载中...',
    });
  }
};

const removeLoading = () => {
  requestNum--;
  if (requestNum === 0) {
    uni.hideLoading();
  }
};

const handleNetworkError = (status?: number, message?: string) => {
  let errMessage = '未知错误';
  if (status) {
    switch (status) {
      case 400:
        errMessage = message || '错误的请求';
        break;
      case 401:
        errMessage = message || '未授权，请重新登录';
        break;
      case 403:
        errMessage = message || '拒绝访问';
        break;
      case 404:
        errMessage = message || '请求错误，未找到该资源';
        break;
      case 405:
        errMessage = message || '请求方法未允许';
        break;
      case 408:
        errMessage = message || '请求超时';
        break;
      case 500:
        errMessage = message || '服务器端出错';
        break;
      case 501:
        errMessage = message || '网络未实现';
        break;
      case 502:
        errMessage = message || '网络错误';
        break;
      case 503:
        errMessage = message || '服务不可用';
        break;
      case 504:
        errMessage = message || '网络超时';
        break;
      case 505:
        errMessage = message || 'http 版本不支持该请求';
        break;
      default:
        errMessage = message || `其他连接错误 --${status}`;
    }
  } else {
    errMessage = message || `无法连接到服务器！`;
  }

  uni.showToast({
    title: errMessage,
    icon: 'none',
  });
};
