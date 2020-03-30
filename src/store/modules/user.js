import { getInfo, LoginOut } from '../../api/user'
import { setSession, removeSession } from '../../utils/auth'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const state = {
  userinfo: {}
}
const mutations = {
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo
    setSession('userinfo', userinfo.data)
  },
  CLEAR_SESSION: (state) => {
    removeSession('userinfo')
  }
}
const actions = {
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        // if (!data) {
        //   reject('Verification failed, please Login again.')
        // }
        //
        // const { roles } = data
        //
        // // roles must be a non-empty array
        // if (!roles || roles.length <= 0) {
        //   reject('getInfo: roles must be a non-null array!')
        // }

        commit('SET_USERINFO', response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  loginout ({ commit }) {
    console.log(111)
    return new Promise((resolve, reject) => {
      LoginOut().then(() => {
        commit('CLEAR_SESSION')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
