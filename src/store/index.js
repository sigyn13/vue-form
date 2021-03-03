import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: [],
    postSuccess: null
  },
  mutations: {
    SET_CITY_TO_STATE: (state, city) => {
      state.city = city;
    },
    SET_SUCCESS_TO_STATE: (state, value) => {
      state.postSuccess = value.success;
    },
    DELETE_SUCCES_TO_STATE: state => {
      state.postSuccess = null;
    }
  },
  actions: {
    GET_CITY_FROM_API({ commit }) {
      axios
        .get("https://60254fac36244d001797bfe8.mockapi.io/api/v1/city")
        .then(city => {
          commit("SET_CITY_TO_STATE", city.data);
          return city;
        })
        .catch(error => {
          return error;
        });
    },
    POST_DATA_FROM_FORM({ commit }, formData) {
      axios
        .post(
          "https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form",
          formData
        )
        .then(response => {
          commit("SET_SUCCESS_TO_STATE", response.data);
          console.log(response.data.success);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    CITY(state) {
      return state.city;
    },
    SUCCESS(state) {
      return state.postSuccess;
    }
  },
  modules: {}
});
