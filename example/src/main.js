import Vue from "vue";
import { VueRedux } from "vue2-redux";
import App from "./components/App.vue";
import Store from "./store";

Vue.use(VueRedux(Store));

new Vue({
  el: "#app",
  render: h => h(App)
});
