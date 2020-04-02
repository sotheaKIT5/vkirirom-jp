<template>
  <v-row class="left-right-card pb-3">
    <v-col cols="12" md="5">
      <v-img
        class="card-img"
        contain
        aspect-ratio="1"
        :src="getAsset(imgUrl)"
      />
    </v-col>
    <v-spacer />
    <v-col cols="12" md="7" class="card-content">
      <h1 v-html="title" class="card-title" />
      <p v-html="description" class="card-text" />
      <read-more
        :btn-txt="btnTxt"
        :card-url="cardUrl"
        :scroll-to="scrollTo"
        :visibility="btnVisibility"
      />
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
    },
    scrollTo: {
      type: String,
      default: null
    },
    btnVisibility: {
      type: String,
      default: "block"
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
  font-size: 30px
.card-img
    width: 100%
    margin: 0 auto
@media #{map-get($display-breakpoints, 'sm-only')}
  .card-img
    width: 50%
@media #{map-get($display-breakpoints, 'md-and-up')}
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
        width: 100%
</style>
