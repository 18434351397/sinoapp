const state = {
  active: '0',
  searchValue: ''
}
const mutations = {
  SET_ACTIVE: (state, active) => {
    debugger
    state.active = active
  },
  SET_searchValue: (state, searchValue) => {
    state.searchValue = searchValue
  }
}
const actions = {
  setactive ({ commit }, active) {
    debugger
    commit('SET_SIZE', active)
  },
  setsearchValue ({ commit }, searchValue) {
    commit('SET_searchValue', searchValue)
  }
}
export default {
  state,
  mutations,
  actions
}
