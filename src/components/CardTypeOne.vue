<template>
  <v-col cols="12" sm="6" class="pa-0">
    <v-hover v-slot:default="{ hover }" open-delay="20">
      <v-card
        :to="cardUrl"
        flat
        tile
        class="type-one-card fill-height"
        :elevation="hover ? 5 : 1"
      >
        <div class="card-img mb-7">
          <v-img contain aspect-ratio="1.1" :src="getAsset(imgUrl)" />
        </div>
        <div class="card-content">
          <h1 class="card-title primary--text">
            {{ title }}
          </h1>
          <p v-html="description" />
        </div>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "CardTypeOne",
  components: {},
  props: {
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: null
    },
    imgUrl: {
      type: String,
      default: null
    },
    cardUrl: {
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
@import '~vuetify/src/styles/styles'
.v-application .elevation-1
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2) !important
.v-application .elevation-5
  box-shadow: 0 5px 25px rgba(119, 115, 115, 0.3) !important
.type-one-card
    width: 100%
    max-width: 1185px
    padding: 15px 15px 50px 15px
    &:hover
      z-index: 1
.card-title
    font-weight: bold
    font-size: 18px
    line-height: 20px
    text-align: center
    margin-bottom: 16px
.card-img
    margin-right: auto
    margin-left: auto
    width: 100%
.card-img
  width: 70%
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-content
        justify-content: center
    .card-title
        font-size: 24px
        line-height: 30px
    .card-img
      width: 60%
</style>
