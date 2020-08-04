import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import apiRequests from "./actions/api-requests";
import commonActions from "./actions/commonActions";

const actions = { ...apiRequests, ...commonActions };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    regular_list: [],
    general_list: [],
    loading: false,
  },
  mutations,
  actions,
  getters,
});
