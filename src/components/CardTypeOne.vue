<template>
  <v-hover v-slot:default="{ hover }" open-delay="20">
    <v-card flat tile class="type-one-card" :elevation="hover ? 5 : 1">
      <div class="card-img">
        <v-img :src="imgUrl" />
      </div>
      <div class="card-content">
        <h1 class="card-title primary--text">
          {{ title }}
        </h1>
        <p class="card-text">
          {{ description }}
        </p>
        <read-more :btn-txt="btnTxt" :card-url="cardUrl" />
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "CardTypeOne",
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
@import '~vuetify/src/styles/styles'
.v-application .elevation-1
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2) !important
.v-application .elevation-5
  box-shadow: 0 5px 25px rgba(119, 115, 115, 0.3) !important
.type-one-card
    width: 100%
    max-width: 1185px
    padding: 15px 15px 50px 15px
.card-content
    display: flex
    flex-flow: column
    width: 100%
.card-title
    font-weight: bold
    font-size: 24px
    line-height: 30px
    text-align: center
    margin-bottom: 16px
.card-img
    margin-right: auto
    margin-left: auto
    width: 100%
.card-img
  width: 50%
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-content
        justify-content: center
    .card-title
        font-weight: bold
        font-size: 24px
        line-height: 30px
    .card-text
        font-size: 16px
</style>
