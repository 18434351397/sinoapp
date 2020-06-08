import Cookies from 'js-cookie'
import Vue from 'vue'
import { Toast } from 'vant'
// import api from '../api/api'

const userinfo = 'userinfo'

export function setToken(token) {
  return Cookies.set(userinfo, token)
}
export function getToken(token) {
  return Cookies.get(userinfo, token)
}
export function removeToken(token) {
  return Cookies.remove(userinfo, token)
}

export function setSession(key, data) {
  data = JSON.stringify(data)
  sessionStorage.setItem(key, data)
}
export function getSession(key) {
  if (key === '') return ''
  const retValue = JSON.parse(sessionStorage.getItem(key))
  if (retValue === null) return ''
  return retValue
}
export function removeSession(key) {
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
Vue.prototype.debounce = function debounce(fn, wait) {
  var timeout = null
  return function () {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
// 防抖
const delay = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

// 全局封装的下载方法
Vue.prototype.downLoad = function (data) {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  if (isAndroid) {
    let dtask = plus.downloader.createDownload(data.url, {});
    dtask.addEventListener('statechanged', function (d, status) {
      plus.gallery.save( // 下载保存路径到图库
        d.filename,
        function () {
          switch (d.state) {
            case 1: // 开始
              Toast.loading({ message: '加载中...' });
              break;
            case 2: // 已连接到服务器
              Toast.loading({ message: '链接到服务器...' });
              break;
            case 3: // 已接收到数据
              const a = Math.floor(d.downloadedSize / d.totalSize * 100) + '%'
              Toast.loading({ message: a });
              break;
            case 4: // 下载完成
              Toast.success('下载完成！');
              plus.nativeUI.closeWaiting()
              plus.runtime.openFile(d.filename);
              break;
          }
        })
    })
  } else {
    let dtask = plus.downloader.createDownload(data.url, {});
    dtask.addEventListener('statechanged', function (d, status) {
      switch (d.state) {
        case 1: // 开始
          Toast.loading({ message: '加载中...' });
          break;
        case 2: // 已连接到服务器
          Toast.loading({ message: '链接到服务器...' });
          break;
        case 3: // 已接收到数据
          const a = Math.floor(d.downloadedSize / d.totalSize * 100) + '%'
          Toast.loading({ message: a });
          break;
        case 4: // 下载完成
          Toast.success('下载完成！');
          plus.nativeUI.closeWaiting()
          plus.runtime.openFile(d.filename);
          break;
      }
    })
  }
  dtask.start();

  // // 下载方法  通过form表单来发起请求
  // const form = document.createElement('form')
  // form.method = 'post'
  // form.style.display = 'none'
  // // form.action = window.location.href.split('#')[0] + api.downLoadUrl
  // // form.action = 'http://172.169.200.207:8082' + api.downLoadUrl
  // form.action = api.downLoadUrl
  // const input = document.createElement('input')
  // input.type = 'hidden'
  // input.name = 'fileId'
  // input.value = data.fileId
  // form.append(input)
  // document.body.append(form)
  // form.submit()

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

// 转换大小写方法
Vue.prototype.intToChinese = function intToChinese(n) {
  var fraction = ['角', '分']
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  var head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

// 自动获取焦点
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
