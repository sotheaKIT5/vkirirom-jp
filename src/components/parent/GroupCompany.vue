<template>
  <v-container id="group-of-company">
    <section-title>ITサービス事業</section-title>
    <div class="company-main-card justify-center">
      <card-type-five
        class="company-card"
        v-for="(company, id) in companies"
        :key="id"
        :title="company.title"
        :description="company.description"
        :imgUrl="company.imgUrl"
        btn-txt="続きを読む"
        :hrefTo="company.hrefTo"
      />
    </div>
  </v-container>
</template>

<script>
import CardTypeFive from "../CardTypeFive";
import SectionTitle from "../SectionTitle";
export default {
  name: "GroupCompany",
  components: { SectionTitle, CardTypeFive },
  data() {
    return {
      companies: [
        {
          title: "A2A Digital",
          description:
            "A2A Digitalは、A2A Town（Cambodia）Co.、LTdのITサービス事業部門です。最先端のテクノロジーを利用したオフショア開発やERP(Odoo)導入支援を提供します。",
          imgUrl: "images/company/a2a-digital-logo.png",
          hrefTo: "http://a2a-digital.com/"
        },
        {
          title: "JOBIFY",
          description:
            "Jobifyは求人マッチングプラットフォームです。 私たちは、求職者、特に新卒の学生に、私たちの幅広い就職機会へのアクセスを提供します。 従業員の採用を検討している企業の場合、市場で最高の候補者がいることを保証します。",
          imgUrl: "images/company/jobify.png",
          hrefTo: "http://jobify.work/"
        },
        {
          title: "FIXH.ME",
          description:
            "Fixh.meは、サービスプロバイダーを、電気機器、水道、電気などの家庭の問題に直面している人々に接続するプラットフォームです。 2018年に、現在カンボジアのプノンペンで事業を行っている100人以上のサービスプロバイダーと共に4人の創設メンバーから始めました。",
          imgUrl: "images/company/fixhme.png",
          hrefTo: "https://fixh.me/en"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.company-main-card
    display: flex
    flex-flow: wrap
    padding-bottom: 50px
.company-card:hover
    z-index: 1
@media #{map-get($display-breakpoints, 'sm-and-up')}
    .company-card
        width: 50%
</style>
