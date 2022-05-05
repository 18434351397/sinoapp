import { getInfo, LoginOut } from '../../api/user'
import { setSession, removeSession } from '../../utils/auth'
import router from '../../router'
const state = {
  userinfo: {},
  openBankInfo: {
    isOpenBankMark: '0',
    ishowWhitchPageMark: '0'
  }

}
const mutations = {
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo
    setSession('userinfo', userinfo.data)
    if (state.openBankInfo.isOpenBankMark === '1') {
      router.push({
        path: '/openBankInfo',
        query: {
          isOpenBankMark: state.openBankInfo.isOpenBankMark,
          ishowWhitchPageMark: state.openBankInfo.ishowWhitchPageMark
        }
      })
    } else {
      router.push('/approval')
    }
  },
  SET_OPENBANINFO: (state, openBankInfo) => {
    state.openBankInfo = openBankInfo
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
