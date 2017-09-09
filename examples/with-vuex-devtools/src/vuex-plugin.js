import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const VuexStore = new Vuex.Store({
  mutations: {
    updateStore(state, payload) {
      Object.assign(state, payload);
    }
  }
});

const VuexPlugin = ({ subscribe, getState }, { commit }) => () => {
  subscribe(() => commit("updateStore", getState()));
};

export { VuexStore, VuexPlugin };
