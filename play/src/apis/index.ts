import { useRequest } from '@/utils/request';
const request = useRequest();

export const getChannel = (params: any) => {
  return request({
    url: `/station/v1/channel/base/tree`,
    method: 'get',
    params,
  });
};
