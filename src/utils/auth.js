import Cookies from 'js-cookie'
import Vue from 'vue'
import api from '../api/api'

const userinfo = 'userinfo'

export function setToken (token) {
  return Cookies.set(userinfo, token)
}
export function getToken (token) {
  return Cookies.get(userinfo, token)
}
export function removeToken (token) {
  return Cookies.remove(userinfo, token)
}

export function setSession (key, data) {
  data = JSON.stringify(data)
  sessionStorage.setItem(key, data)
}
export function getSession (key) {
  if (key === '') return ''
  const retValue = JSON.parse(sessionStorage.getItem(key))
  if (retValue === null) return ''
  return retValue
}
export function removeSession (key) {
  if (key) {
    sessionStorage.removeItem(key)
  }
}
Vue.prototype.ththrottle = function (func, delay) {
  let timer = null
  let startTime = Date.now()
  return function () {
    const curTime = Date.now()
    const remaining = delay - (curTime - startTime)
    const context = this
    const args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      func.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(func, remaining)
    }
  }
}
Vue.prototype.debounce = function debounce (fn, wait) {
  var timeout = null
  return function () {
    if (timeout !== null)clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
// 全局封装的下载方法
Vue.prototype.downLoad = function (data) {
  // 下载方法  通过form表单来发起请求
  const form = document.createElement('form')
  form.method = 'post'
  form.style.display = 'none'
  // form.action = window.location.href.split('#')[0] + api.downLoadUrl
  // form.action = 'http://172.169.200.207:8082' + api.downLoadUrl
  form.action = api.downLoadUrl
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'fileId'
  input.value = data.fileId
  form.append(input)
  document.body.append(form)
  form.submit()
  // 普通download  通过a标签下载--暂时不用
  // downLoad({ fileId: values.fileId }).then(res => {
  //   // if (res) {
  //   // const blob = new Blob([res])
  //   // const fileName = data.fileName
  //   // if ('download' in document.createElement('a')) { // 非IE下载
  //   //   const elink = document.createElement('a')
  //   //   elink.download = fileName
  //   //   elink.style.display = 'none'
  //   //   elink.href = URL.createObjectURL(blob)
  //   //   document.body.appendChild(elink)
  //   //   elink.click()
  //   //   URL.revokeObjectURL(elink.href) // 释放URL 对象
  //   //   document.body.removeChild(elink)
  //   // } else { // IE10+下载
  //   //   navigator.msSaveBlob(blob, fileName)
  //   // }
  //   // }
  //   // })
}
