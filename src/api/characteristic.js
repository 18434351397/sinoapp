import request from '@/utils/request'
import api from './api'

// 投标报价
export async function sealapproveformList (data) {
  return request({
    url: api.sealapproveformList + '/' + data,
    method: 'get'
  })
}
