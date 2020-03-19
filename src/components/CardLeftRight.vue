<template>
  <v-row class="left-right-card pb-3">
    <v-col cols="12" sm="5" class="card-img">
      <v-img aspect-ratio="1" :src="getAsset(imgUrl)" />
    </v-col>
    <v-spacer />
    <v-col cols="12" sm="7" class="card-content">
      <h1 class="card-title">
        {{ title }}
      </h1>
      <p class="card-text">
        {{ description }}
      </p>
      <read-more :btn-txt="btnTxt" :card-url="cardUrl" />
    </v-col>
  </v-row>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "CardLeftRight",
  components: { ReadMore },
  props: {
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    },
    btnTxt: {
      type: String,
      default: "btnTxt"
    },
    imgUrl: {
      type: String,
      default: "images/dummy/pwa.jpg"
    },
    cardUrl: {
      type: String,
      default: "/"
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
.left-right-card
    max-width: 1185px
    margin-left: auto
    margin-right: auto
.left-right-card:nth-last-child(1)
  padding-bottom: 0
.card-content
    display: flex
    flex-flow: column
    width: 100%
.card-title
  margin-bottom: 16px
.card-img
    width: 100%
@media #{map-get($display-breakpoints, 'sm-and-up')}
    .left-right-card
        display: flex
        flex-flow: row
    .card-content
        width: 50%
        justify-content: center
    .card-title
        font-size: 36px
        line-height: 43px
        margin-bottom: 15px
    .card-text
        font-size: 16px
    .card-img
        width: 40%
</style>
