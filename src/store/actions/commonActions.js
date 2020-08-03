export default {
  SORT_LIST({ commit }, key, sortArg) {
    console.log('actions sortArg', sortArg);
    commit('SORT_LIST_IN_STATE', key, sortArg);
  },
  SET_FILTER({ commit }, filterkey) {
    console.log('filterkey', filterkey);
    commit('SET_FILTER_IN_STATE', filterkey);
  },
};
