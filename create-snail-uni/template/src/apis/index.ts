<% if (requestType === 'axios') { %>import { request } from '@/utils/request';<% } %><% if (requestType === 'alova') { %>import { useHttp } from '@/utils/alova';<% } %>
<% if (requestType === 'axios') { %>
export const getChannel = (params<% if (useTs) { %>: any<% } %>) => {
  return request({
    url: `/station/v1/channel/base/tree`,
    method: 'get',
    params,
    loading: true,
  });
};<% } %><% if (requestType === 'alova') { %>
export const getChannel = (params<% if (useTs) { %>: any<% } %>) => {
  return useHttp.Get('/api/v1/xxx', {
    params,
    meta: { domain: 'xxxx', loading: true, showError: false }
  })
};<% } %>
