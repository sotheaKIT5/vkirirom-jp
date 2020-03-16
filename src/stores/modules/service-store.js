import api from "../../API/APIClient";

export const ServiceStore = {
  namespaced: true,
  state: {
    content: null,
    endPoint: "home/service-content"
  },
  mutations: {
    LOAD(state, payload) {
      state.content = payload;
    }
  },

  actions: {
    load({ commit, state }) {
      var payload = api.loadAPI(state.endPoint);
      commit("LOAD", payload);
    }
  },

  getters: {
    content: state => {
      return state.content;
    }
  }
};
