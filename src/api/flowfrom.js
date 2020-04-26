import request from '@/utils/request'
import api from './api'

export async function getTodoList (data) {
  return request({
    url: api.todoListUrl,
    method: 'post',
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
export async function getOrgTree (data) {
  return request({
    url: api.orgTree,
    method: 'get'
  })
}
export async function flowFormUpdate (data) {
  return request({
    url: data.url,
    method: 'post',
    data: data.data
  })
}
