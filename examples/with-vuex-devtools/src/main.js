import Vue from "vue";
import { VueRedux } from "vue2-redux";
import App from "./components/App.vue";
import Store from "./store";
import { VuexPlugin, VuexStore } from "./vuex-plugin";

Vue.use(VueRedux(Store));
Vue.use(VuexPlugin(Store, VuexStore));

new Vue({
  el: "#app",
  store: VuexStore,
  render: h => h(App)
});
