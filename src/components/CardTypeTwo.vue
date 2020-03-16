<template>
  <v-col cols="12" sm="6" md="4" class="pa-1 px-0 pa-sm-2">
    <v-card flat height="100%" class="type-one-card" elevation="5">
      <div class="card-content">
        <h1 class="card-title">
          {{ title }}
        </h1>
        <p class="card-text">
          {{ description }}
        </p>
        <read-more
          style="position:absolute;bottom:25px;"
          :btn-txt="btnTxt"
          :card-url="cardUrl"
        />
      </div>
    </v-card>
  </v-col>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "CardTypeTwo",
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
    cardUrl: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.type-one-card
    padding: 35px 15px 35px 15px
.card-content
    display: flex
    flex-flow: column
.card-title
    font-weight: bold
    font-size: 36px
    line-height: 43px
    text-align: center
    margin-bottom: 16px
.card-text
    margin-bottom: 25px
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-title
      height: 90px
      font-weight: 800
      font-size: 36px
      line-height: 42px
    .card-text
        font-size: 16px
</style>
