/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
export default {
  SET_LIST_TO_STATE: (state, list) => {
    state.general_list = list;
    state.regular_list = state.general_list.slice(0, 50);
  },
  SORT_LIST_IN_STATE: (state, payload) => {
    console.log('mutations key', payload.key);
    console.log('mutations sortArg', payload.sortArg);
    if (payload.sortArg > 0) {
      // eslint-disable-next-line no-nested-ternary
      state.general_list.sort((a, b) => (a[payload.key] > b[payload.key] ? 1 : b[payload.key] > a[payload.key] ? -1 : 0));
    } else {
      // eslint-disable-next-line no-nested-ternary
      state.general_list.sort((a, b) => (a[payload.key] > b[payload.key] ? -1 : b[payload.key] > a[payload.key] ? 1 : 0));
    }
    state.regular_list = state.general_list.slice(0, 50);
  },
};
