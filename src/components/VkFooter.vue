<template>
  <v-card flat tile color="primary">
    <v-container>
      <v-row class="pa-3">
        <v-col
          cols="12"
          sm="6"
          class="align-self-center text-center text-sm-left pa-0"
        >
          <logo
            class="justify-center justify-md-start"
            color_one="#ffffff"
            color_two="#ffffff"
          />
        </v-col>
        <v-col cols="12" sm="6" class="pa-0">
          <div class="text-center text-sm-right white--text">
            <span class="d-block d-sm-inline">
              {{ $t("footer.follow_us_on") }}:
            </span>
            <v-btn
              small
              class="ma-2"
              outlined
              fab
              color="white"
              href="https://www.facebook.com/a2adigitalcambodia/"
              target="_blank"
            >
              <v-img
                height="20"
                width="20"
                contain
                src="../assets/icons/facebook-f-brands-white.svg"
              />
            </v-btn>
            <v-btn
              small
              class="ma-2"
              outlined
              fab
              color="white"
              href="https://www.linkedin.com/in/a2a-digital-a757421a2/"
              target="_blank"
            >
              <v-img
                height="20"
                width="20"
                contain
                src="../assets/icons/linkedin-in-brands-white.svg"
              />
            </v-btn>
            <v-btn
              small
              class="ma-2"
              outlined
              fab
              color="white"
              href="https://twitter.com/a2adigital"
              target="_blank"
            >
              <v-img
                height="20"
                width="20"
                contain
                src="../assets/icons/twitter-brands-white.svg"
              />
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "VkFooter",
  components: { Logo }
};
</script>

<style scoped></style>
