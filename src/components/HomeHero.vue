<template>
  <div>
    <v-card flat tile class="hero overflow-hidden">
      <v-carousel
        cycle
        height="100vh"
        class="bg-img"
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="getAsset(slide.src)"
          reverse-transition="slide-x-reverse-transition"
          transition="slide-x-transition"
        ></v-carousel-item>
      </v-carousel>
      <!--      <v-img class="bg-img" src="@/assets/images/bg-img-hero.png" />-->
      <!--      <video-->
      <!--        v-if="$vuetify.breakpoint.mdAndUp"-->
      <!--        class="bg-vdo"-->
      <!--        playsinline-->
      <!--        autoplay-->
      <!--        muted-->
      <!--        loop-->
      <!--        poster="@/assets/images/bg-img-hero.png"-->
      <!--      >-->
      <!--        <source src="@/assets/videos/bg-video.mp4" type="video/mp4" />-->
      <!--      </video>-->
      <div class="inner-hero">
        <h1 class="mx-auto">
          カンボジア最難関の技術大学と産学連携 <br />
          「ラボ型開発インターン」
        </h1>
        <p class="mx-2 mx-sm-auto">
          カンボジア国内外のハッカソンで賞金獲得するレベルの学生が<br />
          ソフトウェア開発経験を積んだあと、貴社のラボ型開発に挑戦します。
        </p>
        <v-btn
          color="#ff8c00"
          x-large
          class="btn mt-8 white--text"
          to="/cloud-crew"
        >
          詳細を見る
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {
      duration: 1000,
      offset: 0,
      slides: [
        {
          src: "images/slideshow/womentechmaker.jpg"
        },
        {
          src: "images/slideshow/imaginecup.jpg"
        },
        {
          src: "images/slideshow/smartapi-circle-1.jpg"
        },
        {
          src: "images/slideshow/smartstart2.jpg"
        },
        {
          src: "images/slideshow/smartapi-circle-2.jpg"
        },
        {
          src: "images/slideshow/smartedu.jpg"
        },
        {
          src: "images/slideshow/somjot.jpg"
        },
        {
          src: "images/slideshow/smartstart.jpg"
        }
      ]
    };
  },
  methods: {
    getAsset(path) {
      return require("@/assets/" + path);
    }
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset
      };
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.hero
  min-height: 700px
  height: 100vh
  padding-top: 80px
  margin-top: -80px
  background-color: #000000
  background-position: center
  background-repeat: no-repeat
  background-size: cover
.bg-vdo
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  min-width: 100%
  min-height: 100%
  width: auto
  height: auto
.bg-img
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  min-width: 100%
  min-height: 100%
  width: auto
  height: auto
.inner-hero
  width: 100%
  position: absolute
  top: 50%
  left: 50%
  text-align: center
  color: cadetblue
  -webkit-transform: translateX(-50%) translateY(-50%)
  transform: translateX(-50%) translateY(-50%)
  text-shadow: 0 5px 5px rgba(0,0,0,0.8)
.inner-hero h1
  font-style: normal
  font-weight: bold
  font-size: 32px
  line-height: 42px
  color: #ffffff
.inner-hero p
  font-style: normal
  font-weight: normal
  font-size: 18px
  line-height: 20px
  color: #ffffff
  margin-top: 25px
.btn
  text-shadow: none
  box-shadow: none
.icon
  -webkit-filter: drop-shadow(0 5px 5px rgba(0,0,0,0.8))
  filter: drop-shadow(0 5px 5px rgba(0,0,0,0.8))
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .hero
    height: 100vh
    padding-top: 80px
    margin-top: -80px
    padding-bottom: 80px
    margin-bottom: -80px
  .inner-hero h1
    font-size: 35px
    line-height: 42px
  .inner-hero p
    font-size: 25px
    line-height: 30px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .inner-hero h1
    font-size: 50px
    line-height: 60px
    width: 100%
  .inner-hero p
    font-size: 25px
    line-height: 30px
</style>
