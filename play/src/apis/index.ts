import { request } from '@/utils/request';
export const getChannel = (params: any) => {
  return request({
    url: `/station/v1/channel/base/tree`,
    method: 'get',
    params,
    loading: true,
  });
};
