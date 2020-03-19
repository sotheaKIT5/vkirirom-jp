<template>
  <v-app id="app">
    <!--    <component-->
    <!--      class="l_navigator"-->
    <!--      :is="currentMenu"-->
    <!--      :right="side === 'right' ? true : false"-->
    <!--    ></component>-->
    <nav-bar />
    <v-content>
      <router-view />
      <vue-progress-bar />
    </v-content>
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
  mounted() {},
  components: { NavBar }
};
</script>
<style lang="sass">
html, body
  overflow-x: hidden
.container
  padding-top: 0 !important
  padding-bottom: 0 !important
ul
  list-style: square outside
@media (min-width: 1904px)
  .container
    max-width: 1185px !important
    padding: 0 !important
</style>
