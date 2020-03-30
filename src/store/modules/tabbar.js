const state = {
  active: '0'
}
const mutations = {
  SET_ACTIVE: (state, active) => {
    debugger
    state.active = active
  }
}
const actions = {
  setactive ({ commit }, active) {
    debugger
    commit('SET_SIZE', active)
  }
}
export default {
  state,
  mutations,
  actions
}
