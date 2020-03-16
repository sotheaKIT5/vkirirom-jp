<template>
  <v-card flat tile color="accent" class="benefits-section container--fluid">
    <v-container>
      <section-title class="white--text">価値メリット</section-title>
      <div class="benefit-main-card d-flex flex-wrap">
        <card-type-two
          class="benefit-card"
          v-for="(benefit, id) in benefits"
          :key="id"
          :title="benefit.title"
          :description="benefit.description"
          :card-url="benefit.goTo"
          btn-txt="続きを読む"
        />
      </div>
    </v-container>
  </v-card>
</template>

<script>
import SectionTitle from "../SectionTitle";
import CardTypeTwo from "../CardTypeTwo";
export default {
  name: "ValueBenefitsSection",
  components: { CardTypeTwo, SectionTitle },
  data() {
    return {
      benefits: [
        {
          title: "高い業務理解力",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "継続的なエンジニア工数供給力",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "グローバル化への対応における課題",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "お客さまのメリット",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "企業タイプ別の経営課題",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "経営課題への対策と結果",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc., We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "キリロム工科大学を 研究開発拠点として",
          description:
            "We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.benefits-section
  padding-bottom: 50px
</style>
