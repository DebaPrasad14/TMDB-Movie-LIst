import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "movie-list",
    component: () => import("@/views/MovieList.vue"),
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;