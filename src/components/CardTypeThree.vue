<template>
  <v-card flat color="accent" class="pa-3 pb-5 pa-md-6 pb-md-0">
    <v-row class="main-card fill-height align-center fill-height" no-gutters>
      <v-col class="main-img d-flex align-self-end" cols="12" md="5">
        <v-img aspect-ratio="1.1" contain class="img" :src="getAsset(imgSrc)" />
      </v-col>
      <v-col cols="12" md="7" class=" main-text white--text">
        <h2 class="card-title pb-1 text-center text-md-left">{{ title }}</h2>
        <h4 class="card-subtitle pb-4 text-center text-md-left">
          {{ subtitle }}
        </h4>
        <p>
          <q>{{ description }}</q>
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CardTypeThree",
  props: {
    imgSrc: {
      type: String,
      default: "images/dummy/man-1.png"
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    description: {
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
.main-card
  display: block
.main-img
  height: 200px
.img
  width: 50%
.card-title
  font-size: 28px
.card-subtitle
  font-size: 14px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .main-card
    display: flex
  .img
    width: 100%
</style>
