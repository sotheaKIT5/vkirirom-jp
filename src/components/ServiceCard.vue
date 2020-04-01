<template>
  <v-col cols="12" sm="6" class="pa-0">
    <v-hover v-slot:default="{ hover }" open-delay="20">
      <v-card flat tile class="card fill-height" :elevation="hover ? 5 : 1">
        <v-card tile flat class="card-img">
          <v-img contain class="image" :src="getAsset(imgUrl)" />
        </v-card>
        <div class="card-content">
          <h4 class="card-title">
            {{ title }}
          </h4>
          <p v-html="description" class="card-text"></p>
          <span>
            <slot />
          </span>
        </div>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    },
    imgUrl: {
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
.v-application .elevation-1
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2) !important
.v-application .elevation-5
    box-shadow: 0 5px 25px rgba(119, 115, 115, 0.3) !important
.card
  &:hover
    z-index: 1
.card-content
    display: flex
    flex-flow: column
    width: 100%
    padding: 20px
.card-title
    font-weight: bold
    font-size: 20px
    line-height: 30px
    text-align: center
    margin-bottom: 16px
    color: #138690
.card-text
  font-size: 14px
.card-img
    width: 100%
    max-height: 300px
    display: flex
    align-items: center
.image
    max-height: 250px
    margin: 20px auto
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
    .card-title
        font-size: 24px
    .card-text
        font-size: 16px
    .card-img
      max-height: 350px
    .image
      max-height: 330px
</style>
