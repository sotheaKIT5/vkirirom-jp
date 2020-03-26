<template>
  <v-app-bar height="95" app color="white" fixed>
    <v-container>
      <vue-navigation-bar :options="navbarOptions" />
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NabarV2",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("@/assets/logo/logo_black.png"),
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: require("@/assets/icons/bar-solid.png"),
        collapseButtonImageClose: require("@/assets/icons/close.png"),
        showBrandImageInMobilePopup: true,
        tooltipAnimationType: "shift-away",
        menuOptionsRight: [
          {
            type: "link",
            text: "サービス",
            subMenuOptions: [
              {
                type: "link",
                text: "オフショア開発",
                path: "./service_1"
              },
              {
                type: "link",
                text: "エンジニア採用",
                path: "./service_2"
              },
              {
                type: "link",
                text: "アジアDX",
                path: "./service_3"
              }
            ]
          },
          {
            type: "link",
            text: " 企業・投資家の皆様",
            path: "./investor"
          },
          {
            type: "link",
            text: " 会社概要",
            path: "./about"
          },
          {
            type: "link",
            text: "ニュース",
            path: "./news"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.vnb {
  height: 95px;
  &__brand-image-wrapper {
    &__link {
      height: 45px;
      &__image {
        width: 100%;
        max-height: 45px;
        height: 45px;
      }
    }
  }
  &__menu-options {
    &--left {
    }

    &--right {
    }

    &__option {
      &__link {
        color: #303030 !important;
        &:hover {
          color: #138690 !important;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
