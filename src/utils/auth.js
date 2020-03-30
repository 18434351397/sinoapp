import Cookies from 'js-cookie'

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
