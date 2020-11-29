import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "movie-list",
    component: () => import("@/views/MovieList"),
    redirect: { name: "new-release" },
    children: [
      {
        path: "new-release",
        name: "new-release",
        component: () => import("@/components/movie-types/NewRelease"),
      },
      {
        path: "upcoming",
        name: "upcoming",
        component: () => import("@/components/movie-types/Upcoming"),
      },
      {
        path: "action",
        name: "action",
        component: () => import("@/components/movie-types/Action"),
      },
      {
        path: "comedy",
        name: "comedy",
        component: () => import("@/components/movie-types/Comedy"),
      },
      {
        path: "crime",
        name: "crime",
        component: () => import("@/components/movie-types/Crime"),
      },
      {
        path: "drama",
        name: "drama",
        component: () => import("@/components/movie-types/Drama"),
      },
      {
        path: "thriller",
        name: "thriller",
        component: () => import("@/components/movie-types/Thriller"),
      },
      {
        path: "sci-fi",
        name: "sci-fi",
        component: () => import("@/components/movie-types/Scifi"),
      },
      {
        path: "family",
        name: "family",
        component: () => import("@/components/movie-types/Family"),
      },
      {
        path: "horror",
        name: "horror",
        component: () => import("@/components/movie-types/Horror"),
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
