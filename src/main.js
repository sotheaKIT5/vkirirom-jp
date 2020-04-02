import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from "./stores";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import AOS from "aos";
import "aos/dist/aos.css";
import vueHeadful from "vue-headful";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.component("vue-headful", vueHeadful);
Vue.component("vue-navigation-bar", VueNavigationBar);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  created() {
    AOS.init({ disable: "phone", duration: 1200 });
  },
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
