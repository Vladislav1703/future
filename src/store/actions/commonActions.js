export default {
  SORT_LIST({ commit }, key, sortArg) {
    commit("SORT_LIST_IN_STATE", key, sortArg);
  },
  SET_FILTER({ commit }, filterkey) {
    commit("SET_FILTER_IN_STATE", filterkey);
  },
};
