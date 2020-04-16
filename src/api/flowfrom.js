import request from '@/utils/request'
import api from './api'

export async function getTodoList (data) {
  return request({
    url: api.todoListUrl,
    method: 'put',
    data
  })
}
export async function search (data) {
  return request({
    url: api.searchUrl,
    method: 'put',
    data
  })
}
export async function flowForm (data) {
  return request({
    url: api.flowFormUrl + '/' + data,
    method: 'get'
  })
}
