<template>
  <div :class="{ loader: true }">
    <v-img height="50" contain src="../assets/logo/logo_white.svg" alt="logo" />
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  props: ["isLoading"]
};
</script>

<style scoped>
.loader {
  background-color: #138690;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  display: block;
  font-size: 32px;
  overflow: hidden;
  padding-top: 45vh;
  position: fixed;

  text-align: center;
}
</style>
