import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuelidate from "vuelidate";
import { Mixins } from "./mixins";
import Vuex from "vuex";

Vue.mixin(Mixins);
Vue.use(Vuelidate);

Vue.directive("CustomDirectiveForH1", {
  bind(el) {
    el.style.color = "white";
    el.style.fontSize = "2.5rem";
    el.style.paddingTop = "4px";
    el.style.paddingBottom = "4px";
  },
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
