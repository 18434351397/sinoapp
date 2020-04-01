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
export function getUserInfo (data) {
  return request({
    url: api.getUserInfoUrl,
    method: 'get',
    params: data
  })
}
export function smsSend (data) {
  return request({
    url: api.smsSendUrl,
    method: 'post',
    data
  })
}
export function editPswd (data) {
  return request({
    url: api.editPasswordUrl,
    method: 'post',
    data
  })
}
export function checkOldPwd (data) {
  return request({
    url: api.checkOldPwd,
    method: 'post',
    data
  })
}
