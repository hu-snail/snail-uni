import { loadEnv } from 'vite';
import path from 'node:path';
import axios from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';

const mode = <string>process.env.NODE_ENV;

const env = loadEnv(mode, path.resolve(process.cwd(), 'env'));
const { VITE_SERVER_BASEURL: baseURL, VITE_REQUEST_TIMEOUT, VITE_CONTENT_TYPE, VITE_SUCCESS_CODE } = env;

const timeout = parseFloat(VITE_REQUEST_TIMEOUT);

const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': VITE_CONTENT_TYPE,
  },
  adapter: createUniAppAxiosAdapter(),
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
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
  (response) => {
    const res = response.data;

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

export default instance;
