<template>
  <v-container>
    <section-title>Services</section-title>
    <div class="service-main-card">
      <card-type-one
        class="service-card"
        v-for="(service, id) in services"
        :key="id"
        :title="service.title"
        :description="service.description"
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
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
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
