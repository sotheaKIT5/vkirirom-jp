<template>
  <v-col cols="12" md="6">
    <v-card outlined class="card" :to="goTo">
      <h2 class="title">{{ position }}</h2>
      <p class="my-3">{{ location }}</p>
      <v-chip class="pa-3" color="#E6F0F6" label text-color="primary">
        <v-icon left>mdi-label</v-icon>
        {{ category }}
      </v-chip>
      <read-more class="read-more" :card-url="goTo" />
    </v-card>
  </v-col>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "JobCard",
  components: { ReadMore },
  props: {
    position: {
      type: String,
      default: "position"
    },
    location: {
      type: String,
      default: "location"
    },
    category: {
      type: String,
      default: "category"
    },
    goTo: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.card
  padding: 12px
  &:hover
    box-shadow: 0 0 10px rgba(80, 80, 80, 0.25)
    .read-more
      &:hover
        color: red
  .title
    font-weight: bold
    font-size: 18px
  .subtitle
    font-size: 14px
  .read-more
    position: absolute
    bottom: 12px
    right: 12px

@media #{map-get($display-breakpoints, 'md-and-up')}
  .card
    .title
      font-size: 20px
    .subtitle
      font-size: 16px
</style>
