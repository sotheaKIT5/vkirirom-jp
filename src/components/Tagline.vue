<template>
  <v-card
    flat
    tile
    class="px-1 py-7 py-sm-1"
    style="background: linear-gradient(89.73deg, #050154 0.04%, #0AF0FF 92.96%);"
  >
    <v-container class="tagline white--text">
      <v-row>
        <v-col
          cols="12"
          sm="8"
          class="d-flex flex-column justify-center pr-md-12"
        >
          <h1 v-html="title" class="title" />
          <p v-html="description" class="description" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-img height="215" contain :src="getAsset(imgSrc)" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Tagline",
  props: {
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    },
    imgSrc: {
      type: String,
      default: "images/lazy-image.png"
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
.title
    font-weight: bold !important
    font-size: 30px !important
    margin-bottom: 20px
.description
    font-size: 16px !important
@media #{map-get($display-breakpoints, 'md-and-up')}
    .title
        font-size: 45px !important
        margin-bottom: 20px
    .description
        font-size: 20px !important
</style>
