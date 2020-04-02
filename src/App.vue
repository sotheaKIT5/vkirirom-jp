<template>
  <v-app id="app">
    <div>
      <nav-bar />
      <v-content class="page">
        <router-view class="pb-12" />
      </v-content>
      <vk-footer />
    </div>
  </v-app>
</template>
<script>
const NavBar = () => import(/* webpackMode: "eager" */ "./components/NavBar");
const VkFooter = () =>
  import(/* webpackMode: "eager" */ "./components/VkFooter");

export default {
  name: "App",
  components: { NavBar, VkFooter }
};
</script>
<style lang="sass">
@import '~vuetify/src/styles/styles'
html, body
  overflow-x: hidden
.container
  padding-top: 0 !important
  padding-bottom: 0 !important
ul
  list-style: square outside
p, span
  font-size: 14px
.page
  min-height: 90vh
@media #{map-get($display-breakpoints, 'md-and-up')}
  p, span
    font-size: 16px
@media (min-width: 1904px)
  .container
    max-width: 1185px !important
    padding: 0 !important
</style>
