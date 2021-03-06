import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#138690",
        secondary: "#A40505",
        accent: "#74BEC2",
        error: "#b71c1c"
      }
    }
  }
});
