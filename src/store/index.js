import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: []
  },
  mutations: {
    SET_CITY_TO_STATE: (state, city) => {
      state.city = city;
    }
  },
  actions: {
    GET_CITY_FROM_API({ commit }) {
      return axios("https://60254fac36244d001797bfe8.mockapi.io/api/v1/city", {
        method: "GET"
      })
        .then(city => {
          commit("SET_CITY_TO_STATE", city.data);
          return city;
        })
        .catch(error => {
          return error;
        });
    }
  },
  getters: {
    CITY(state) {
      return state.city;
    }
  },
  modules: {}
});
