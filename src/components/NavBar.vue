<template>
  <v-app-bar
    :height="navbarHeight"
    fixed
    app
    hide-on-scroll
    color="rgba(166, 166, 166, 0.25)"
  >
    <v-container
      style="display: flex; align-items: center; position: relative; padding-bottom: 0; padding-top: 0"
    >
      <router-link to="/" id="logo">
        <img
          height="45px"
          :src="require('../assets/logo/logo_white.svg')"
          alt="a2a_logo"
        />
      </router-link>
      <v-spacer />
      <div class="hidden-xs-only" style="display:flex; flex-direction: row">
        <v-card
          tile
          flat
          v-ripple="{ center: true }"
          :ripple="{ class: 'primary--text' }"
          to="/"
          class="nav-btn px-3 py-3"
          v-for="(nav, id) in navs"
          :key="id"
        >
          <span>{{ nav.title }}</span>
        </v-card>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      services: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      navs: [
        {
          title: this.$t("service"),
          navUrl: "/"
        },
        {
          title: "Japanese",
          navUrl: "/"
        },
        {
          title: "Japanese",
          navUrl: "/"
        },
        {
          title: "Japanese",
          navUrl: "/"
        },
        {
          title: "Japanese",
          navUrl: "/"
        },
        {
          title: "Japanese",
          navUrl: "/"
        }
      ]
    };
  },
  watch: {
    navs: [
      {
        title: this.$t("service"),
        navUrl: "/"
      }
    ]
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    navbarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "60px";
        case "sm":
          return "60px";
        case "md":
          return "95px";
        case "lg":
          return "95px";
        case "xl":
          return "95px";
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    btnWitdh() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "65px";
        case "sm":
          return "80px";
        case "md":
          return "100px";
        case "lg":
          return "100px";
        case "xl":
          return "100px";
      }
    }
  }
};
</script>

<i18n>
  {
    "ja": {
      "service" : "サービス",
      "navs": [
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        }
      ]
    },
    "en": {
      "service" : "Service",
      "navs": [
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        },
        {
          "title": "Japanese",
          "navUrl": "/"
        }
      ]
    }
  }
</i18n>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
#logo
    height: 45px
.nav-btn
    display: flex
    flex-flow: column
    align-items: center
    justify-content: center
    box-shadow: none
    background-color: transparent !important
    color: #FFFFFF !important
.nav-btn:hover
    background-color: #138690 !important
.icon
    height: 20px
@media #{map-get($display-breakpoints, 'md-and-up')}
    .icon
        height: 28px
    .nav-btn
        font-size: 16px
</style>
