<template>
  <v-container>
    <section-title>高い業務理解力</section-title>
    <v-row class="d-flex">
      <card-type-four
        v-for="(i, id) in 7"
        :key="id"
        :img-src="`https://picsum.photos//500/300?image=${i * 3 + 1}`"
        btn-txt="Read Bio"
      />
    </v-row>
  </v-container>
</template>

<script>
import CardTypeFour from "../CardTypeFour";
import SectionTitle from "../SectionTitle";
export default {
  name: "ManagementSection",
  components: { SectionTitle, CardTypeFour }
};
</script>

<style scoped></style>
