<template>
  <v-col cols="12" sm="4" md="4" class="pa-1 px-0 pa-sm-3">
    <v-card flat height="100%" class="type-one-card">
      <div class="card-content">
        <h1 class="card-title px-5 py-3">
          {{ title }}
        </h1>
        <v-divider class="divider" />
        <ul v-html="description" class="card-text pa-5 ma-0"></ul>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CardTypeTwo",
  components: {},
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
ul
  list-style: square inside url("../assets/icons/square.svg")
.divider
  border-color: #138690
.type-one-card
    /*padding: 35px 15px 35px 15px*/
.card-content
    display: flex
    flex-flow: column
.card-title
    font-weight: bold
    font-size: 18px
    text-align: center
.card-text
    margin-bottom: 25px
@media #{map-get($display-breakpoints, 'md-and-up')}
    .card-title
      font-size: 24px
      line-height: 42px
    .card-text
      font-weight: 900
      font-size: 16px
      line-height: 30px
</style>
