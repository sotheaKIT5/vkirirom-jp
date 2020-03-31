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
      path: "/investor",
      name: "news",
      component: () =>
        import(
          /* webpackChunkName: "InvestorPage" */ "@/views/InvestorPage.vue"
        )
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
      path: "/offshore-development",
      name: "contact",
      component: () =>
        import(
          /* webpackChunkName: "OffshoreDevelopmentPage" */ "@/views/OffshoreDevelopmentPage.vue"
        )
    },
    {
      path: "/a2a-digital-jp",
      name: "a2a-digital-jp",
      component: () =>
        import(
          /* webpackChunkName: "A2ADigitalJapanPage" */ "@/views/A2ADigitalJapanPage.vue"
        )
    },
    {
      path: "/kit",
      // eslint-disable-next-line no-unused-vars
      beforeEnter(to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = "https://kit.edu.kh/";
      }
    },
    {
      path: "/kit-sponsor",
      // eslint-disable-next-line no-unused-vars
      beforeEnter(to, from, next) {
        window.location = "https://www.kit-sponsor.com/";
      }
    },
    {
      path: "/a2a-digital",
      // eslint-disable-next-line no-unused-vars
      beforeEnter(to, from, next) {
        window.location = "https://a2a-digital.com/";
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
