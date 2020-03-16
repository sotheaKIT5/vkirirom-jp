<template>
  <v-card tile color="accent" elevation="1" class="pa-3 pa-sm-6 pb-0 pb-sm-0">
    <v-row class="fill-height align-center fill-height" no-gutters>
      <v-col cols="12" sm="5" align-self="end">
        <v-img :src="imgSrc" />
      </v-col>
      <v-col cols="12" sm="7" class="white--text">
        <h2 class="pb-1">{{ title }}</h2>
        <h4 class="pb-4">{{ subtitle }}</h4>
        <h3>
          <q>{{ description }}</q>
        </h3>
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
      default: require("../assets/images/dummy/man-1.png")
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
  }
};
</script>

<style scoped></style>
