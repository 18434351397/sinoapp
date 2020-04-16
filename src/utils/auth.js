import Cookies from 'js-cookie'
import Vue from 'vue'
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
