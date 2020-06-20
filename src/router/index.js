import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import Movie from "../views/Movie.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: SignUp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
