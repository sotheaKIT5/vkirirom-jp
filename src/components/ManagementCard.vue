<template>
  <v-col cols="6" sm="4" md="3" class="pa-1 pa-sm-2">
    <v-card outlined class="card-type-four fill-height pa-2">
      <v-img
        style="border-radius: 0"
        aspect-ratio="4:6"
        :src="getAsset(imgSrc)"
        lazy-src="@/assets/images/lazy-image.png"
      >
      </v-img>
      <div class="pt-2 text-center">
        <h1 class="card-name">
          {{ name }}
        </h1>
        <h4 v-html="position" class="card-title" />
      </div>
      <v-divider class="my-2" />
      <p v-html="selfIntro" />
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ManagementCard",
  props: {
    imgSrc: {
      type: String,
      default: "images/dummy/man-avatar.jpg"
    },
    name: {
      type: String,
      default: "name"
    },
    position: {
      type: String,
      default: "position"
    },
    selfIntro: {
      type: String,
      default: "self introduction"
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
.card-type-four:hover .card-btn, .card-type-four:hover .card-btn>span, .card-type-four:hover .card-btn path
    background: #138690
    color: #FFFFFF !important
    fill: #FFFFFF
.card-head
    height: 100px
.card-name
    font-weight: bold
    font-size: 18px
.card-title
    font-weight: normal
    font-size: 14px
@media #{map-get($display-breakpoints, 'sm-only')}
    .card-head
        height: 115px
    .card-name
        font-size: 20px
    .card-title
        font-size: 16px
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-head
        height: auto
    .card-name
        font-size: 20px
    .card-title
        font-size: 16px
</style>
