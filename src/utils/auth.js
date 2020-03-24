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
