<template>
  <v-app id="app">
    <nav-bar />
    <v-content>
      <router-view class="pb-12" />
    </v-content>
    <vk-footer />
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import VkFooter from "./components/VkFooter";
export default {
  name: "App",
  data() {},
  mounted() {},
  components: { VkFooter, NavBar }
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
