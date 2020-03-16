import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "HomePage" */ "@/views/HomePage.vue")
    },
    {
      path: "*",
      name: "404",
      component: () =>
        import(/* webpackChunkName: "Error" */ "@/views/ErrorPage.vue")
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});
