import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
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
