<template>
  <v-col cols="12" sm="4" md="3" class="pa-2">
    <v-card flat outlined class="fill-height">
      <v-card tile flat class="card-img" :href="hrefTo">
        <v-img contain class="image" :src="getAsset(imgUrl)" />
      </v-card>
      <div class="card-content">
        <h4 class="card-title">
          {{ title }}
        </h4>
        <p v-html="description" class="card-text"></p>
        <span>
          <span class="font-size-12 font-weight-bold">Industry:</span>
          <slot />
        </span>
        <read-more
          class="btn"
          :btn-txt="btnTxt"
          :href-to="hrefTo"
          :visibility="btnVisibility"
        />
      </div>
    </v-card>
  </v-col>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "CardTypeSix",
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
    ceo: {
      type: String,
      default: "name"
    },
    bizDesc: {
      type: String,
      default: "business description"
    },
    btnTxt: {
      type: String,
      default: "btnTxt"
    },
    imgUrl: {
      type: String,
      default: require("@/assets/images/dummy/pwa.jpg")
    },
    hrefTo: {
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
    padding: 12px 12px 50px 12px
.card-title
    font-weight: bold
    font-size: 16px
    line-height: 30px
    text-align: center
    margin-bottom: 16px
.card-img
    width: 100%
    height: 150px
    display: flex
    align-items: center
    background-color: #A5DBDE
.image
    margin-right: auto
    margin-left: auto
    max-height: 100px
    max-width: 180px
.btn
    position: absolute
    bottom: 15px
.font-size-12
  font-size: 12px
th
    min-width: 95px
th, td
    padding: 2px 0
    text-align: left
    line-height: 30px
table > tr > th
    vertical-align: top
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-content
        justify-content: center
    .card-text
        font-size: 16px
</style>
