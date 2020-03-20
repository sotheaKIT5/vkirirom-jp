<template>
  <v-container id="service">
    <section-title>サービス</section-title>
    <div class="service-main-card">
      <card-type-one
        class="service-card"
        v-for="(service, id) in services"
        :key="id"
        :title="service.title"
        :description="service.description"
        :imgUrl="service.imgUrl"
        btn-txt="価値メリット"
        :card-url="service.goTo"
      />
    </div>
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
import CardTypeOne from "../CardTypeOne";
export default {
  name: "ServicesSection",
  components: { CardTypeOne, SectionTitle },
  data() {
    return {
      reverse: "flex-direction:row-revers;",
      services: [
        {
          title: "A2A デジタルをオフショア開発拠点として",
          imgUrl: "images/service-3.png"
        },
        {
          title: "国内外でのエンジニア組織立ち上げ支援として",
          imgUrl: "images/service-4.png"
        },
        {
          title: "プチCTO派遣",
          imgUrl: "images/service-5.png"
        },
        {
          title: "新技術スタートアップへの投資案件として",
          imgUrl: "images/service-6.png"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.service-main-card
  display: flex
  flex-flow: wrap
  padding-bottom: 50px
.service-card:hover
  z-index: 1
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .service-card
    width: 50%
</style>
