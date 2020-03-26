<template>
  <v-app id="app">
    <div>
      <navbar-v2 />
      <v-content class="page">
        <router-view class="pb-12" />
      </v-content>
      <vk-footer />
    </div>
  </v-app>
</template>
<script>
const NavbarV2 = () =>
  import(/* webpackMode: "eager" */ "./components/NavbarV2");
const VkFooter = () =>
  import(/* webpackMode: "eager" */ "./components/VkFooter");

export default {
  name: "App",
  components: { NavbarV2, VkFooter }
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
.page
  min-height: 100vh
@media (min-width: 1904px)
  .container
    max-width: 1185px !important
    padding: 0 !important
</style>
