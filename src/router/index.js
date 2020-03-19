import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "HomePage" */ "@/views/HomePage.vue")
    },
    {
      path: "/kit-sponsor",
      // eslint-disable-next-line no-unused-vars
      beforeEnter(to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = "https://www.kit-sponsor.com/";
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
