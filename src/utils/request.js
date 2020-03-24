import axios from 'axios'
// import qs from 'qs'
const serve = axios.create({
  headers: {
    'content-type': 'application/json; charset=utf-8'
  },
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://172.169.100.126:8082',
  timeout: 5000
})

const instance = axios.create({
  headers: { 'content-type': 'multipart/form-data' }
})
serve.interceptors.request.use(
  config => {
    if (config.method === 'post') {
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
    const res = response.data
    if (res.code === 200) {
      alert(res.message)
    } else {
      return res
    }
  },
  error => {
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
