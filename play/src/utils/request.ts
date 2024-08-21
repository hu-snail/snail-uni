import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
import { useUserStore } from '@/store';

const {
  VITE_SERVER_BASEURL: baseURL,
  VITE_REQUEST_TIMEOUT,
  VITE_CONTENT_TYPE,
  VITE_SUCCESS_CODE,
  VITE_SHOW_LOADING,
} = import.meta.env;
const timeout = JSON.parse(VITE_REQUEST_TIMEOUT);

let requestNum = 0;

// 定义额外的请求配置
interface RequestConfig extends AxiosRequestConfig {
  /**
   * 是否显示loading
   */
  loading?: boolean;
}

const addLoading = () => {
  requestNum++;
  if (requestNum === 1 && JSON.parse(VITE_SHOW_LOADING)) {
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

export const useRequest = (config?: RequestConfig): AxiosInstance => {
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
    (config: RequestConfig): any => {
      // 根据自己的项目进行修改
      const Authorization = useUserStore().Authorization;
      // 设置token
      if (Authorization && config.headers) {
        config.headers['Authorization'] = Authorization;
      }
      const { loading = true } = config;
      if (loading) addLoading();
      return config;
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
      const res = response.data;
      const { loading = true } = response.config as RequestConfig;
      if (loading) removeLoading();
      // 请求出错处理
      if (res.status === -1) {
        uni.showToast({
          title: '服务器异常',
          duration: 2000,
        });

        return Promise.reject(res);
      }
      // 业务错误处理
      if (JSON.parse(VITE_SUCCESS_CODE).indexOf(res.status) !== -1) {
        return Promise.reject(res);
      }
      return res;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
};
