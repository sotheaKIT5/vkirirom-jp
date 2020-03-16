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
      redirect: "/"
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});
