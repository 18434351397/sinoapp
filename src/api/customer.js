import request from '@/utils/request'
import api from './api'

export async function customerList (data) {
  return request({
    url: api.customerList + '/' + data,
    method: 'get'
  })
}
