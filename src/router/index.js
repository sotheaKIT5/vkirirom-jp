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
      component: () => import("@/views/HomePage.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "AboutPage" */ "@/views/AboutPage.vue")
    },
    {
      path: "/startup",
      name: "startup",
      component: () =>
        import(/* webpackChunkName: "InvestorPage" */ "@/views/StartupPage.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "NewsPage" */ "@/views/NewsPage.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "ContactPage" */ "@/views/ContactPage.vue")
    },
    {
      path: "/cloud-crew",
      name: "cloud-crew",
      component: () =>
        import(
          /* webpackChunkName: "CloudCrewPage" */ "@/views/CloudCrewPage.vue"
        )
    },
    {
      path: "/offshore-development",
      name: "offshore-development",
      component: () =>
        import(
          /* webpackChunkName: "OffshoreDevelopmentPage" */ "@/views/OffshoreDevelopmentPage.vue"
        )
    },
    {
      path: "/engineer-recruitment",
      name: "engineer-recruitment",
      component: () =>
        import(
          /* webpackChunkName: "EngineerRecruitmentPage" */ "@/views/EngineerRecruitmentPage.vue"
        )
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
