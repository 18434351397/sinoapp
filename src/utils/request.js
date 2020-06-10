import axios from 'axios'
import router from '../router'
import { removeSession } from './auth'
import { Toast } from 'vant'
// import qs from 'qs'
const serve = axios.create({
  headers: {
    // contentType: 'application/json; charset=utf-8',
    // AccessControlAllowOrigin: 'http://172.169.100.121:8082',
    // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderField, Origin',
    'Access-Control-Allow-Origin': 'http://172.169.100.126:8082',
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'x-requested-with': 'XMLHttpRequest'
  },
  withCredentials: true,
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://192.168.18.28:8095',
  // baseURL: 'http://172.169.2.235:8095',
  // baseURL: 'http://192.168.162.128:88',
  // baseURL: 'http://172.169.200.207:8082',
  // baseURL: 'http://218.241.175.243:8082',  // 生产外网
  // baseURL: 'http://218.241.175.246:8082', // 126外网
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
    console.log(router.currentRoute.path)
    // if (router.currentRoute.path !== '/approval') {
    // } else {
    //   Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true
    //   })
    // }
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
    // 下载处理
    const headers = response.headers
    if (headers['content-type'] === 'application/octet-stream;charset=utf-8') {
      return response.data
    }
    // 清理loading
    // Toast.clear()
    // 删除session信息
    console.log(response.data.code)
    if (response.data.code === '200') {
      Toast({
        closeOnClick: true,
        closeOnClickOverlay: true,
        duration: 30000,
        message: '账号已在其他设备登录，请重新登录! \n 如非本人操作。建议尽快修改密码！',
        forbidClick: false
      })
      router.push('/')
      removeSession('userinfo')
      return
    }
    // 返回错误信息
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
    // Toast.clear()
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
