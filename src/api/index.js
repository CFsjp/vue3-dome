import request from '@/utils/request';
// import { GLOBAL_CONFIG } from '@/config';

/**
 * 请求实例
 * @param {Object} params
 * @return {AxiosPromise}
 */
export function get(url, params) {
  return request({
    url,
    method: 'get',
    params
  });
}

export function post(url, params) {
  return request({
    url,
    method: 'post',
    params
  });
}
