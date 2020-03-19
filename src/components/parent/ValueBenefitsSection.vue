<template>
  <v-card flat tile color="accent" class="benefits-section container--fluid">
    <v-container id="value">
      <section-title class="white--text">企業が抱える課題</section-title>
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
          title: "経営側からグローバル市場へのシフトが求められている",
          description:
            "<li>グローバルでプロジェクトを推進できる人材がいない</li><li>採用が困難、獲得コストも高騰</li>"
        },
        {
          title: "社内人材の 育成・研修プログラムを探している",
          description:
            "<li>実務とかけ離れたものばかり</li><li>採用が困難、獲得コストも高騰</li>"
        },
        {
          title: "グローバル化への対応における課題",
          description:
            "<li>欧米先進諸国はコストが高い</li><li>アジアは安全面・生活環境等の体制が不安</li>"
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
