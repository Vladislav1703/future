export default {
  PUSH_ROW_IN_LIST ({ commit }, row) {
    console.log(row, 'actions')
    commit('PUSH_ROW_IN_STATE', row)
  },
  SORT_LIST ({ commit }, key, sortArg) {
    commit('SORT_LIST_IN_STATE', key, sortArg)
  },
  SET_FILTER ({ commit }, filterkey) {
    commit('SET_FILTER_IN_STATE', filterkey)
  },
  SET_PAGE ({ commit }, pages) {
    commit('SET_PAGE_IN_STATE', pages)
  }
}
