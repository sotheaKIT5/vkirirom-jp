<template>
  <v-app-bar :height="navbarHeight" fixed app style="z-index: 99">
    <v-container class="d-flex pa-0">
      <router-link to="/" class="logo">
        <img
          height="45px"
          :src="require('@/assets/logo/logo_black.svg')"
          alt="a2a_digital_japan_logo"
        />
      </router-link>
      <v-spacer />
      <button
        class="v-app-bar__nav-icon v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
        <span class="v-btn__content">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style="height: 20px; width: 20px"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </span>
      </button>
      <div class="hidden-sm-and-down" style="display:flex; flex-direction: row">
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          @click="$vuetify.goTo('#service', options)"
          to="/#service"
        >
          <span>{{ $t("nav.service") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          @click="$vuetify.goTo('#value', options)"
          to="/#value"
        >
          <span>{{ $t("nav.value") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          to="/kit"
        >
          <span>{{ $t("nav.kit") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          to="/a2a-digital"
        >
          <span>{{ $t("nav.a2a_digital") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          to="/a2a-digital-jp"
        >
          <span>{{ $t("nav.a2a-digital-jp") }}</span>
        </v-card>
        <v-card
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          class="nav-btn px-3 py-3"
          active-class="primary--text"
          to="/about"
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
      width="100%"
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
          <v-list-item
            @click="$vuetify.goTo('#service', options)"
            to="/#service"
          >
            <v-list-item-title>{{ $t("nav.service") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item @click="$vuetify.goTo('#value', options)" to="/#value">
            <v-list-item-title>{{ $t("nav.value") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/kit">
            <v-list-item-title>{{ $t("nav.kit") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/a2a-digital">
            <v-list-item-title>{{ $t("nav.a2a_digital") }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item to="/a2a-digital-jp">
            <v-list-item-title>
              {{ $t("nav.a2a-digital-jp") }}
            </v-list-item-title>
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
            <v-img
              height="20"
              contain
              src="../assets/icons/facebook-f-brands.svg"
            />
          </v-btn>
          <v-btn small class="ma-2" outlined fab color="black" to="#">
            <v-img
              height="20"
              contain
              src="../assets/icons/linkedin-in-brands.svg"
            />
          </v-btn>
          <v-btn small class="ma-2" outlined fab color="black" to="#">
            <v-img
              height="20"
              contain
              src="../assets/icons/twitter-brands.svg"
            />
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
@media #{map-get($display-breakpoints, 'md-and-up')}
    .nav-btn
        font-size: 16px
</style>
