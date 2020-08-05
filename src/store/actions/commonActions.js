export default {
  PUSH_ROW_IN_LIST ({ commit }, id, firstName, lastName, email, phone) {
    console.log(id, firstName, lastName, email, phone)
    commit('PUSH_ROW_IN_STATE', id, firstName, lastName, email, phone)
  },
  SORT_LIST ({ commit }, key, sortArg) {
    commit('SORT_LIST_IN_STATE', key, sortArg)
  },
  SET_FILTER ({ commit }, filterkey) {
    commit('SET_FILTER_IN_STATE', filterkey)
  }
}
