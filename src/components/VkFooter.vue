<template>
  <v-card flat tile color="primary">
    <v-container>
      <v-row class="pa-3">
        <v-col
          cols="12"
          sm="6"
          class="align-self-center text-center text-sm-left pa-0"
        >
          <router-link to="/" class="logo">
            <img
              height="45px"
              :src="require('@/assets/logo/logo_white.svg')"
              alt="a2a_digital_japan_logo"
            />
          </router-link>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0">
          <div class="text-center text-sm-right white--text">
            <span class="d-block d-sm-inline">
              {{ $t("footer.follow_us_on") }}:
            </span>
            <v-btn small class="ma-2" outlined fab color="white" to="#">
              <v-img
                height="20"
                contain
                src="../assets/icons/facebook-f-brands-white.svg"
              />
            </v-btn>
            <v-btn small class="ma-2" outlined fab color="white" to="#">
              <v-img
                height="20"
                contain
                src="../assets/icons/linkedin-in-brands-white.svg"
              />
            </v-btn>
            <v-btn small class="ma-2" outlined fab color="white" to="#">
              <v-img
                height="20"
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
export default {
  name: "VkFooter"
};
</script>

<style lang="sass" scoped>
.logo
    height: 45px
</style>
