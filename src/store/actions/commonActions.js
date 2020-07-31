export default {
  SORT_LIST({ commit }, key, sortArg) {
    console.log('actions sortArg', sortArg);
    commit('SORT_LIST_IN_STATE', key, sortArg);
  },
};
