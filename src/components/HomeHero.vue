<template>
  <div>
    <v-card class="hero" flat tile>
      <video
        class="bg-vdo hidden-xs-only"
        playsinline
        autoplay
        muted
        loop
        :poster="bgImg"
      >
        <source :src="getAsset(bgVdo)" type="video/mp4" />
      </video>
      <img
        class="bg-vdo hidden-sm-and-up"
        :src="getAsset(bgImg)"
        alt="bg-img"
      />
      <div class="inner-hero">
        <h1 v-html="title" class="mx-auto" />
        <p v-html="quote" class="mx-auto" />
        <v-btn color="primary" x-large class="btn mt-8 white--text" to="/about">
          {{ btnTxt }}
        </v-btn>
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
    },
    bgVdo: {
      type: String,
      default: null
    }
  },
  methods: {
    getAsset(path) {
      return require("@/assets/" + path);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.hero
  height: 93vh
.bg-vdo
  height: 93vh
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
  text-shadow: 0 5px 5px #00000080
  -webkit-filter: drop-shadow(0 5px 5px #00000080)
  filter: drop-shadow(0 5px 5px #00000080)
.inner-hero h1
  font-style: normal
  font-weight: bold
  font-size: 35px
  line-height: 42px
  color: #ffffff
  width: 350px
.inner-hero p
  font-style: normal
  font-weight: normal
  font-size: 18px
  line-height: 20px
  color: #ffffff
  width: 350px
  margin-top: 25px
.btn
  text-shadow: none
  box-shadow: none
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .hero
    height: 96vh
  .inner-hero h1, .inner-hero p
    width: 540px
  .bg-vdo
    height: 96vh
  .inner-hero h1
    font-size: 35px
    line-height: 42px
    width: 462px
  .inner-hero p
    font-size: 25px
    line-height: 30px
    width: 670px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .hero
    height: 90vh
  .bg-vdo
    height: 100vh - 9.5vh
  .inner-hero h1
    font-size: 50px
    line-height: 60px
    width: 900px
  .inner-hero p
    font-size: 25px
    line-height: 30px
    width: 850px
</style>
