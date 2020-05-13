import request from '@/utils/request'
import api from './api'

// 合同审评
export async function projptenderpreqList (data) {
  return request({
    url: api.projptenderpreqList + '/' + data,
    method: 'get'
  })
}
