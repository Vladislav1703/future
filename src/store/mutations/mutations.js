export default {
  SET_LIST_TO_STATE: (state, list) => {
    state.general_list = list;
    state.regular_list = state.general_list.slice(0, 50);
  },
  SORT_LIST_IN_STATE: (state, key) => {
    // eslint-disable-next-line no-nested-ternary
    state.general_list.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
    state.regular_list = state.general_list.slice(0, 50);
  },
};
