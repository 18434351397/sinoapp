import request from '@/utils/request'
import api from './api'

export function Login (data) {
  return request({
    url: api.loginUrl,
    method: 'get',
    params: data
  })
}
export function LoginOut (data) {
  return request({
    url: api.loginOutUrl,
    method: 'post',
    data
  })
}
export function getInfo (data) {
  return request({
    url: api.getInfoUrl,
    method: 'get',
    params: data
  })
}
