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
  state: {
    movies: [],
    apiBaseURL: "https://api.themoviedb.org/3/",
    apiConfig: "api_key=0b536ecc2fc4b0028b1a20813de48533",
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    getUltimateMovies(context) {
      const URL = `${context.state.apiBaseURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${context.state.apiConfig}`;
      fetch(URL)
        .then((response) => response.json())
        .then(({ results }) => {
          console.log(results);
          context.commit(
            "setMovies",
            results.map((m) => {
              m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
              return m;
            })
          );
        });
    },
  },
  getters: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
