import axios from 'axios'
import router from '../router'
import { removeSession } from './auth'
import { Toast } from 'vant'
// import qs from 'qs'
const serve = axios.create({
  headers: {
    // contentType: 'application/json; charset=utf-8',
    // AccessControlAllowOrigin: '*',
    // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderField, Origin',
    'Access-Control-Allow-Origin': 'http://localhost:8080/',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'x-requested-with': 'XMLHttpRequest'
  },
  withCredentials: true,
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://192.168.18.28:8095',
  // baseURL: '/admin',
  timeout: 200000
})
// serve.defaults.withCredentials = true
// serve.defaults.crossDomain = true
// serve.defaults.headers.common.Authorization = ''
// serve.defaults.headers.post.ContentType = 'application/json; charset=utf-8'
const instance = axios.create({
  headers: { 'content-type': 'multipart/form-data' }
})
serve.interceptors.request.use(
  config => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    })
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
    }
    if (config.method === 'get') {
      // config.data = qs.stringify(config.data)
    }
    if (config.method === 'put') {
      // config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
serve.interceptors.response.use(
  response => {
    Toast.clear()
    if (response.data.code) {
      router.push('/')
      removeSession('userinfo')
      return
    }
    // if (typeof response.data === 'string') {
    //   if (response.data.includes('login')) {
    //     router.push('/')
    //     return
    //   }
    // }
    if (response.data.resultCode === 500) {
      this.$toast(response.data.resultMessage)
    }
    // config.data = qs.stringify(config.data)
    const res = response.data
    if (res.code === 200) {
    } else {
      return res
    }
  },
  error => {
    Toast.clear()
    // if (error) {
    //   router.push('/')
    // }
    Promise.reject(error)
  }
)
serve.post = function (url, data = {}) {
  return new Promise(
    (resolve, reject) => {
      axios.post(url, data)
        .then(
          response => {
            resolve(response.data)
          }
        )
        .catch(
          err => {
            reject(err)
          }
        )
    }
  )
}

serve.get = function (url, param = {}) {
  return new Promise(
    (resolve, reject) => {
      axios.get(url, param)
        .then(
          response => {
            resolve(response.data)
          })
        .catch(
          err => {
            reject(err)
          }
        )
    }
  )
}

serve.uploadFile = function (url, data = {}) {
  return new Promise(
    (resolve, reject) => {
      instance.post(url, data)
        .then(
          response => {
            resolve(response.data)
          }
        )
        .catch(
          err => {
            reject(err)
          }
        )
    }
  )
}

export default serve
