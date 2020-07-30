export default {
  SET_LIST_TO_STATE: (state, list) => {
    state.list = list;
  },
  SORT_LIST_IN_STATE: (state, key) => {
    state.list.sort((a, b) => a[key] - b[key]);
  },
};
