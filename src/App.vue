<template>
  <v-app id="app">
    <!--    <component-->
    <!--      class="l_navigator"-->
    <!--      :is="currentMenu"-->
    <!--      :right="side === 'right' ? true : false"-->
    <!--    ></component>-->
    <nav-bar />
    <div class="content">
      <router-view />
      <vue-progress-bar />
    </div>
    <!--    <Footer />-->
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  data() {
    return {
      side: "right",
      currentMenu: "slide"
    };
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
    window.scrollTo(0, 0);
  },
  components: { NavBar },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>
<style lang="sass">
html, body
  overflow-x: hidden
.container
  padding-top: 0 !important
  padding-bottom: 0 !important
@media (min-width: 1904px)
  .container
    max-width: 1185px !important
    padding: 0 !important
</style>
