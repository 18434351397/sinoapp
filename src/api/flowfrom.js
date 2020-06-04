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
}// 公共下载方法
export async function downLoad (data) {
  return request({
    url: api.downLoadUrl,
    method: 'post',
    data,
    responseType: 'blob',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  }).then(res => console.log(res))
}
