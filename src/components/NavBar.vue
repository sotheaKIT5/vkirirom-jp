<template>
  <v-app-bar height="80" fixed app style="z-index: 99">
    <v-container class="d-flex pa-0">
      <logo />
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
      <div class="hidden-sm-and-down">
        <div class="d-flex flex-row align-center">
          <v-menu open-on-hover bottom offset-y>
            <template class="fill-height" v-slot:activator="{ on }">
              <v-card class="nav-btn pa-3" :ripple="false" v-on="on">
                <span>
                  サービス
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="#303030"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.36604 0L5.71168 3.65903L2.05733 0L0.929688 1.12908L5.71168 5.9172L10.4937 1.12908L9.36604 0Z"
                    />
                  </svg>
                </span>
              </v-card>
            </template>
            <v-list class="nav-list pa-2">
              <v-list-item
                v-for="(service, id) in services"
                :key="id"
                :to="service.goTo"
                active-class="primary--text"
                class="sub-nav"
              >
                <v-list-item-title>{{ service.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-card
            flat
            v-ripple="{ center: true }"
            :ripple="{ class: 'primary--text' }"
            class="nav-btn pa-3"
            active-class="primary--text"
            to="/about"
          >
            <span>会社概要</span>
          </v-card>
          <v-card
            flat
            v-ripple="{ center: true }"
            :ripple="{ class: 'primary--text' }"
            class="nav-btn pa-3"
            active-class="primary--text"
            to="/contact"
          >
            <span>お問い合わせ</span>
          </v-card>
        </div>
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
            <logo />
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
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>サービス</v-list-item-title>
          </template>
          <v-list-item
            v-for="(service, id) in services"
            :key="id"
            link
            class="ml-5"
            :to="service.goTo"
          >
            {{ service.title }}
          </v-list-item>
        </v-list-group>
        <v-divider />
        <v-list-item active-class="primary--text" to="/about">
          <v-list-item-title>会社概要</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item active-class="primary--text" to="/contact">
          <v-list-item-title>お問い合わせ</v-list-item-title>
        </v-list-item>
        <v-divider />
      </v-list>
      <template v-slot:append>
        <v-divider />
        <div class="pa-2 text-center">
          <div>{{ $t("footer.follow_us_on") }}</div>
          <v-btn
            small
            class="ma-2"
            outlined
            fab
            color="black"
            href="https://www.facebook.com/a2adigitalcambodia/"
          >
            <v-img
              height="20"
              width="20"
              contain
              src="../assets/icons/facebook-f-brands.svg"
            />
          </v-btn>
          <v-btn
            small
            class="ma-2"
            outlined
            fab
            color="black"
            href="https://www.linkedin.com/in/a2a-digital-a757421a2/"
          >
            <v-img
              height="20"
              width="20"
              contain
              src="../assets/icons/linkedin-in-brands.svg"
            />
          </v-btn>
          <v-btn
            small
            class="ma-2"
            outlined
            fab
            color="black"
            href="https://twitter.com/a2adigital"
          >
            <v-img
              height="20"
              width="20"
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
import Logo from "./Logo";
export default {
  name: "NavBar",
  components: { Logo },
  data() {
    return {
      drawer: false,
      group: null,
      duration: 1000,
      offset: 0,
      services: [
        { title: "オフショア開発", goTo: "/offshore-development" },
        { title: "エンジニア採用", goTo: "/engineer-recruitment" }
      ]
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
          return "80px";
        case "lg":
          return "80px";
        case "xl":
          return "80px";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
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
  svg
    fill: #138690
.btn-dropdown
  height: 20px
.btn-dropdown:hover
  height: 85px
.sub-nav *:hover
  color: #138690
.nav-list
  box-shadow: 0px 1px 4px rgba(187, 187, 187, 0.5) !important
@media #{map-get($display-breakpoints, 'md-and-up')}
    .nav-btn
        font-size: 16px
</style>
