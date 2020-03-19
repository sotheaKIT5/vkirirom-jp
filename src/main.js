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
import VeeValidate from "vee-validate";
import VueProgressBar from "vue-progressbar";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

const options = {
  color: "#138690",
  failedColor: "#874b4b",
  thickness: "5px",
  autoRevert: true,
  location: "top",
  inverse: false,
  autoFinish: true
};

Vue.config.productionTip = false;
Vue.use(VueProgressBar, options);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.component("vue-headful", vueHeadful);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  created() {
    AOS.init();
  },
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
