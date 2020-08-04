import axios from "axios";

export default {
  GET_LIST_FROM_API({ commit }, { link }) {
    this.state.loading = true;
    return axios(link, {
      method: "GET",
    })
      .then((list) => {
        commit("SET_LIST_TO_STATE", list.data);
        return list;
      })
      .catch((error) => error)
      .finally((result) => {
        this.state.loading = false;
        return result;
      });
  },
};
