<template>
  <div>
    <v-card flat tile class="hero overflow-hidden">
      <video
        v-if="$vuetify.breakpoint.mdAndUp"
        class="bg-vdo"
        playsinline
        autoplay
        muted
        loop
      >
        <source src="@/assets/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div class="inner-hero">
        <h1 class="mx-auto">
          新しい時代を新しい仲間と<br />リバースイノベーションを巻き起こそう
        </h1>
        <p class="mx-auto">
          A2Aデジタルジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して、成し遂げる力、新しい知識、素晴らしい経験といった御社の成長に貢献する経験をご提供します。
        </p>
        <v-btn
          color="primary"
          x-large
          class="btn mt-8 white--text"
          @click="$vuetify.goTo('/#contact', options)"
          to="/about/#contact"
        >
          ソリューションを開始する
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
  height: 93vh
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
.inner-hero
  width: 100%
  position: absolute
  top: 50%
  left: 50%
  text-align: center
  color: #ffffff
  -webkit-transform: translateX(-50%) translateY(-50%)
  transform: translateX(-50%) translateY(-50%)
  text-shadow: 0 5px 5px rgba(0,0,0,0.8)
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
