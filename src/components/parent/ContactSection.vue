<template>
  <v-card flat tile>
    <section-title>お問い合わせ</section-title>
    <v-row>
      <v-col cols="12" sm="6" class="pa-0">
        <v-card flat tile color="accent">Address</v-card>
      </v-col>
      <v-col cols="12" sm="6" class="pa-0">
        <v-card flat tile>Address</v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "ContactSection",
  components: { SectionTitle }
};
</script>

<style scoped></style>
