<template>
  <v-app-bar :height="navbarHeight" fixed app>
    <v-container class="d-flex pa-0">
      <router-link to="/" class="logo">
        <img
          height="45px"
          :src="require('../assets/logo/logo_black.svg')"
          alt="a2a_logo"
        />
      </router-link>
      <v-spacer />
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down" style="display:flex; flex-direction: row">
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          @click="$vuetify.goTo('#service', options)"
          to="#service"
        >
          <span>{{ $t("nav.service") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.case_detail") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.value") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.kit") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.a2a_digital") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.vkiriromjp") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/service"
          class="nav-btn px-3 py-3"
        >
          <span>{{ $t("nav.about") }}</span>
        </v-card>
      </div>
    </v-container>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      right
      :width="sidebar"
    >
      <template v-slot:prepend>
        <v-list-item
          two-line
          style="box-shadow: 0 0 10px rgba(140, 140, 140, 0.2);"
        >
          <router-link to="/" class="logo">
            <img
              height="45px"
              :src="require('../assets/logo/logo_black.svg')"
              alt="a2a_logo"
            />
          </router-link>
          <v-spacer />
          <button
            type="button"
            class="v-app-bar__nav-icon v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"
            @click.stop="drawer = !drawer"
          >
            <span class="v-btn__content">
              <img
                height="20"
                width="20"
                src="@/assets/icons/close.svg"
                alt=""
              />
            </span>
          </button>
        </v-list-item>
      </template>
      <v-list nav dense flat>
        <v-list-item-group v-model="group" active-class="primary--text">
          <v-list-item @click="$vuetify.goTo('#service', options)">
            <v-list-item-title>{{ $t("nav.service") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/#case_detail">
            <v-list-item-title>{{ $t("nav.case_detail") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/#value_merits">
            <v-list-item-title>{{ $t("nav.value") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/#kit">
            <v-list-item-title>{{ $t("nav.kit") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/#a2a_digital">
            <v-list-item-title>{{ $t("nav.a2a_digital") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/#vkiriromjp">
            <v-list-item-title>{{ $t("nav.vkiriromjp") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/about">
            <v-list-item-title>{{ $t("nav.about") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <div class="pa-2 text-center">
          <div>{{ $t("footer.follow_us_on") }}</div>
          <v-btn small class="ma-2" outlined fab color="black" to="#">
            <v-icon>fab fa-facebook-f</v-icon>
          </v-btn>
          <v-btn small class="ma-2" outlined fab color="black" to="#">
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn small class="ma-2" outlined fab color="black" to="#">
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      group: null,
      duration: 1000,
      offset: 0
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset
      };
    },
    // eslint-disable-next-line vue/return-in-computed-property
    navbarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "64px";
        case "sm":
          return "64px";
        case "md":
          return "95px";
        case "lg":
          return "95px";
        case "xl":
          return "95px";
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    sidebar() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "80%";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.logo
    height: 45px
.nav-btn
    display: flex
    flex-flow: column
    align-items: center
    justify-content: center
    box-shadow: none
    background-color: transparent !important
    color: #000000 !important
.nav-btn:hover
    color: #138690 !important
.icon
    height: 20px
@media #{map-get($display-breakpoints, 'md-and-up')}
    .icon
        height: 28px
    .nav-btn
        font-size: 16px
</style>
