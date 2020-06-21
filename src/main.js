import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuelidate from "vuelidate";
import { Mixins } from "./mixins";

Vue.mixin(Mixins);
Vue.use(Vuelidate);

Vue.directive("customDirective", {
  bind(el) {
    el.style.backgroundColor = "black";
  },
});

// Vue.filter('', function(value){
//   return.value.
// })

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
