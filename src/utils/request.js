import axios from 'axios'
import router from '../router'
// import qs from 'qs'
const serve = axios.create({
  headers: {
    contentType: 'application/json; charset=utf-8',
    AccessControlAllowOrigin: 'http://172.169.100.126:8082',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true
  },
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://172.169.100.126:8082',
  baseURL: '',
  timeout: 60000
})

const instance = axios.create({
  headers: { 'content-type': 'multipart/form-data' }
})
serve.interceptors.request.use(
  config => {
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
    if (typeof response.data === 'string') {
      if (response.data.includes('login')) {
        router.push('/')
        return
      }
    }
    // config.data = qs.stringify(config.data)
    const res = response.data
    if (res.code === 200) {
      alert(res.message)
    } else {
      return res
    }
  },
  error => {
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
