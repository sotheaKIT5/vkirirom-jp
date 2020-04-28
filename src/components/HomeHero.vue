<template>
  <div>
    <v-card flat tile class="hero overflow-hidden">
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
      <v-img class="bg-img" src="../assets/images/bg-img-hero.png" />
      <div class="inner-hero">
        <h1 class="mx-auto">
          在宅があたりまえの時代に対応した新サービス<br />
          「cloud crew」<br />
        </h1>
        <v-img
          contain
          width="145"
          class="mx-auto my-3 icon"
          src="../assets/images/cloud-crew.png"
        />
        <p class="mx-2 mx-sm-auto">
          いますぐに必要なだけのエンジニアを集められる、<br />
          従量課金型のITエンジニア供給サービスです
        </p>
        <v-btn
          color="primary"
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
      offset: 0
    };
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
  background-image: url("../assets/images/bg-img-hero.png")
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
