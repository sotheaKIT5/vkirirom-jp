<template>
  <div>
    <v-card height="100vh" flat tile>
      <img id="bg-img" :src="bgImg" alt="bg-img" />
      <div class="inner-hero">
        <h1 v-html="title" class="mx-auto" />
        <p v-html="quote" class="mx-auto" />
        <v-btn color="primary" x-large class="mt-8 white--text" to="/">{{
          btnTxt
        }}</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "title"
    },
    quote: {
      type: String,
      default: "quote"
    },
    btnTxt: {
      type: String,
      default: "btnTxt"
    },
    bgImg: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
#bg-img
  height: 100vh
  width: 100%
  object-fit: cover
  object-position: 50% 50%
.inner-hero
  width: 100%
  position: absolute
  top: 50%
  left: 50%
  text-align: center
  color: #ffffff
  transform: translateX(-50%) translateY(-50%)
  text-shadow: 0 0 15px #00000080
  -webkit-filter: drop-shadow(0 0 15px #00000080)
  filter: drop-shadow(0 0 15px #00000080)
.inner-hero h1
  font-style: normal
  font-weight: bold
  font-size: 35px
  line-height: 42px
  color: #ffffff
  width: 320px
.inner-hero p
  font-style: normal
  font-weight: normal
  font-size: 18px
  line-height: 20px
  color: #ffffff
  width: 320px
  margin-top: 25px
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .inner-hero h1, .inner-hero p
    width: 540px
@media #{map-get($display-breakpoints, 'md-and-up')}
  #bg-img
    height: 100vh
  .inner-hero h1
    font-size: 50px
    line-height: 60px
    width: 30%
  .inner-hero p
    font-size: 25px
    line-height: 30px
    width: 50%
</style>
