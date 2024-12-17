import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
import { useUserStore } from '@/store';

const {
  VITE_SERVER_BASEURL: baseURL,
  VITE_REQUEST_TIMEOUT,
  VITE_CONTENT_TYPE,
  VITE_SUCCESS_CODE,
  VITE_SHOW_LOADING,
  VITE_SHOW_ERROR,
  VITE_RESPONSE_CODE_KEY,
  VITE_RESPONSE_MSG_KEY,
  VITE_TOKEN_KEY,
} = import.meta.env;

const timeout = JSON.parse(VITE_REQUEST_TIMEOUT);
const code = VITE_RESPONSE_CODE_KEY;
const msg = VITE_RESPONSE_MSG_KEY;
const tokenKey = VITE_TOKEN_KEY;
const showErr = JSON.parse(VITE_SHOW_ERROR);
const showLoading = JSON.parse(VITE_SHOW_LOADING);
export interface ResponseType<T = any> {
  code: number;
  message: string;
  data: T;
}

let requestNum = 0;

interface IRequestConfig extends AxiosRequestConfig {
  loading?: boolean;
  showError?: boolean;
}

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

const debounceTokenCancel = new Map();

export const request = (config?: IRequestConfig): any => {
  const instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': VITE_CONTENT_TYPE,
    },
    ...config,
    adapter: createUniAppAxiosAdapter(),
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config: IRequestConfig): any => {
      // 根据自己的项目进行修改参数
      const token = useUserStore().token;
      // 设置token
      if (token) config.headers![tokenKey] = token;
      const { loading = showLoading } = config;
      if (loading) addLoading();
      const requestTokenKey = `${config.method}_${config.url}`;
      const cancelToken = debounceTokenCancel.get(requestTokenKey);
      if (cancelToken) cancelToken();
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          resolve(config);
        }, 800);
        debounceTokenCancel.set(requestTokenKey, () => {
          clearTimeout(timer);
          resolve(new Error('请勿重复请求'));
        });
      });
    },
    (error) => {
      // do something with request error
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */
    (response: AxiosResponse) => {
      console.log(response);
      const res = response.data;
      const { loading = showLoading, showError = showErr } = response.config as IRequestConfig;
      if (loading) removeLoading();
      // 请求出错处理
      if (res[code] === -1) {
        uni.showToast({
          title: '服务器异常',
          duration: 2000,
        });

        return Promise.reject(res);
      }
      if (JSON.parse(VITE_SUCCESS_CODE).indexOf(res[code]) !== -1) {
        return res;
      } else {
        // 业务错误处理, 根据自己的业务状态码调整
        if (showError) handleNetworkError(res[code], res[msg]);
        else return Promise.reject(res);
      }
    },
    (error) => {
      console.log(error);
      removeLoading();
      // 是否显示错误信息提示 默认显示 关闭时需要在接口调用处自行处理
      if (JSON.parse(VITE_SHOW_ERROR)) {
        if (error.response[code]) handleNetworkError(error.response[code], error.response[msg]);
        else handleNetworkError(error.response.status, ''); // 非业务相关错误
      } else return Promise.reject(error);
    },
  );
  return instance.request(config!);
};

const handleNetworkError = (status: number, message: string) => {
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
        errMessage = message || '请求错误,未找到该资源';
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
        errMessage = message || 'http版本不支持该请求';
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
