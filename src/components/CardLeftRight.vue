<template>
  <v-card flat class="left-right-card">
    <div class="card-img">
      <v-img :src="imgUrl" />
    </div>
    <v-spacer />
    <div class="card-content">
      <h1 class="card-title">
        {{ title }}
      </h1>
      <p class="card-text">
        {{ description }}
      </p>
      <read-more :btn-txt="btnTxt" :card-url="cardUrl" />
    </div>
  </v-card>
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
      default: require("@/assets/images/dummy/pwa.jpg")
    },
    cardUrl: {
      type: String,
      default: "/"
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
    padding: 0 0 50px 0
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
