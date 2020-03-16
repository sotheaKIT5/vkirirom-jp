<template>
  <div class="switch-theme">
    <v-btn
      icon
      outlined
      color="white"
      x-large
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SwitchTheme"
};
</script>

<style lang="sass" scoped>
.switch-theme
  position: fixed
  top: 45%
  left: 0
  padding: 5px 8px 5px 5px
  border-bottom-right-radius: 50px
  border-top-right-radius: 50px
  background-color: #ff564d
  z-index: 99
</style>
