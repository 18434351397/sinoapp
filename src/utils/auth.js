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
Vue.prototype.ththrottle = function(func, delay) {
  let timer = null
  let startTime = Date.now()
  return function() {
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
  return function() {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

// 全局封装的下载方法
Vue.prototype.downLoad = function(data) {
  let url = data.url || data.atturl
  const eLink = window.location.href
    .split('/mobile/#')
    .splice(0, 1)
    .join('')
  const u = navigator.userAgent
  //android终端或者uc浏览器
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -10
  let isXiaomi = u.toLowerCase().match(/mi\s/i) == "mi "
  let isXiaomi2s = u.toLowerCase().match(/mix\s/i) == "mix "
  let isRedmi = u.toLowerCase().match(/redmi/i) == "redmi"
  if (url && eLink) {
    const newUrl = eLink + url
    if (isAndroid) {
      // 小米机型兼容性处理
      if (isXiaomi || isXiaomi2s || isRedmi) {
        var dtask = plus.downloader.createDownload(newUrl, {}, (d, status) => {
          if (status === 200) {
            Toast.success('下载完成！')
            plus.nativeUI.closeWaiting()
            plus.runtime.openFile(d.filename)
          }
        })
      } else {
        var dtask = plus.downloader.createDownload(newUrl,{})
        dtask.addEventListener('statechanged', (d) => {
          switch (d.state) {
            case 1: // 开始
              Toast('加载中...')
              break
            case 2: // 已连接到服务器
              Toast('链接到服务器...')
              break
            case 3: // 已接收到数据
              var a = Math.floor((d.downloadedSize / d.totalSize) * 100) + '%'
              Toast.loading({message: a, overlay: true})
              break
            case 4: // 下载完成
              // 下载保存路径到图库
              plus.gallery.save(d.filename, () => {
                Toast.success('下载完成！')
                plus.nativeUI.closeWaiting()
                plus.runtime.openFile(d.filename)
              })
              break
          }
        })
      }
      dtask.start()
    } else {
      var dtaskIos = plus.downloader.createDownload(newUrl, {})
      dtaskIos.addEventListener('statechanged', (d, status) => {
        switch (d.state) {
          case 1: // 开始
            Toast('加载中...')
            break
          case 2: // 已连接到服务器
            Toast('链接到服务器...')
            break
          case 3: // 已接收到数据
            var aIos = Math.floor((d.downloadedSize / d.totalSize) * 100) + '%'
            Toast.loading({message: aIos, overlay: true})
            break
          case 4: // 下载完成
            Toast.success('下载完成！')
            plus.nativeUI.closeWaiting()
            plus.runtime.openFile(d.filename)
            break
        }
      })
      dtaskIos.start()
    }
  } else {
    Toast.fail('附件路径不存在')
  }
}

// 全局封装的打印方法
Vue.prototype.print = function(data) {
  const url = data.url || data.atturl
  const id = data.id
  const u = navigator.userAgent
  // android终端或者uc浏览器
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  if (url) {
    if (isAndroid) {
      var dtask = plus.downloader.createDownload(url, { id })
      dtask.addEventListener('statechanged', (d, status) => {
        switch (d.state) {
          case 1: // 开始
            Toast('加载中...')
            break
          case 2: // 已连接到服务器
            Toast('链接到服务器...')
            break
          case 3: // 已接收到数据
            var a = Math.floor((d.downloadedSize / d.totalSize) * 100) + '%'
            Toast(a)
            break
          case 4: // 下载完成
            // 下载保存路径到图库
            plus.gallery.save(d.filename, () => {
              Toast.success('下载完成！')
              plus.nativeUI.closeWaiting()
              plus.runtime.openFile(d.filename)
            })
            break
        }
      })
      dtask.start()
    } else {
      var dtaskIos = plus.downloader.createDownload(url, {})
      dtaskIos.addEventListener('statechanged', (d, status) => {
        switch (d.state) {
          case 1: // 开始
            Toast('加载中...')
            break
          case 2: // 已连接到服务器
            Toast('链接到服务器...')
            break
          case 3: // 已接收到数据
            var aIos = Math.floor((d.downloadedSize / d.totalSize) * 100) + '%'
            Toast.loading({ message: aIos })
            break
          case 4: // 下载完成
            Toast.success('下载完成！')
            plus.nativeUI.closeWaiting()
            plus.runtime.openFile(d.filename)
            break
        }
      })
      dtaskIos.start()
    }
  } else {
    Toast.fail('附件路径不存在')
  }
}
// 转换大小写方法
Vue.prototype.intToChinese = function intToChinese(n) {
  var fraction = ['角', '分']
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
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
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  )
}

// 自动获取焦点
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})

// 流程的状态岁颜色改变
Vue.prototype.changeColor = function(status) {
  if (status === '1') {
    // 审核中
    return '#0b57f0'
  } else if (status === '9') {
    // 废弃
    return '#7d7d7d'
  } else if (status === '2') {
    // 审核通过
    return 'green'
  } else if (status === '3') {
    // 会签中
    return '#457df2'
  }
}
