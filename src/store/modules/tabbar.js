const state = {
  active: 0,
  searchValue: ''

}
const mutations = {
  SET_ACTIVE: (state, active) => {
    state.active = active
  },
  SET_searchValue: (state, searchValue) => {
    state.searchValue = searchValue
  }
}
const actions = {
  setactive ({ commit }, active) {
    commit('SET_ACTIVE', active)
  },
  setsearchValue ({ commit }, searchValue) {
    commit('SET_searchValue', searchValue)
  },
  setActive ({ commit }, searchValue) {
    commit('SET_searchValue', searchValue)
  }
}
export default {
  state,
  mutations,
  actions
}
