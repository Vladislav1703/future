import axios from 'axios';

export default {
  GET_LIST_FROM_API({ commit }, { link }) {
    return axios(link, {
      method: 'GET',
    })
      .then((list) => {
        commit('SET_LIST_TO_STATE', list.data);
        return list;
      })
      .catch((error) => error);
  },
};
