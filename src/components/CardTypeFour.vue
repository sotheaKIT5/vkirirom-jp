<template>
  <v-col cols="6" sm="4" md="3" class="pa-1 pa-sm-2">
    <v-card outlined class="card-type-four fill-height">
      <div class="card-head pa-5">
        <!--<h1 class="card-name">-->
        <!--{{ name }}-->
        <!--</h1>-->
        <h4 class="card-title">
          {{ position }}
        </h4>
      </div>
      <v-img
        aspect-ratio="4:6"
        :src="getAsset(imgSrc)"
        :lazy-src="`https://i.picsum.photos/id/10/10/10.jpg`"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CardTypeFour",
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
