<template>
  <v-app id="app">
    <splash-screen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <nav-bar />
      <v-content>
        <router-view class="pb-12" />
      </v-content>
      <vk-footer />
    </div>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import VkFooter from "./components/VkFooter";
import SplashScreen from "./components/SplashScreen";
export default {
  name: "App",
  components: { SplashScreen, VkFooter, NavBar },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
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
