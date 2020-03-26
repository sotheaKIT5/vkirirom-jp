<template>
  <v-container id="group-of-company">
    <section-title>グループ各社事業の紹介</section-title>
    <div class="company-main-card">
      <card-type-five
        class="company-card"
        v-for="(company, id) in companies"
        :key="id"
        :title="company.title"
        :location="company.location"
        :ceo="company.ceo"
        :bizDesc="company.bizDesc"
        :imgUrl="company.imgUrl"
        btn-txt="続きを読む"
        :card-url="company.goTo"
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
          title: "vKirirom Pte. Ltd",
          location: "57 Ubi Crescent, Unit 03-00, Singapore 408596",
          ceo: "猪塚武",
          bizDesc: "グループ本社、グローバルIT事業",
          imgUrl: "images/company/vkirirom.png",
          hrefTo: "https://vkirirom.com/"
        },
        {
          title: "A2A Town (Cambodia) Co., Ltd.",
          location:
            "#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab,  Khan Porsenchey, Phnom Penh, Cambodia",
          ceo: "猪塚武",
          bizDesc: "キリロム工科大学の運営、vKirirom Nature の運営",
          imgUrl: "images/company/a2a.png",
          hrefTo: "https://asiato.asia/"
        },
        {
          title: "キリロム工科大学",
          location:
            "#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab,  Khan Porsenchey, Phnom Penh, Cambodia",
          ceo: "猪塚武",
          bizDesc: "キリロム工科大学の運営、vKirirom Nature の運営",
          imgUrl: "images/company/kit.png",
          hrefTo: "https://kit.edu.kh/"
        },
        {
          title: "vKirirom SG",
          location:
            "#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab,  Khan Porsenchey, Phnom Penh, Cambodia",
          ceo: "猪塚武",
          bizDesc: "キリロム工科大学の運営、vKirirom Nature の運営",
          imgUrl: "images/company/vkirirom.png",
          hrefTo: "#"
        },
        {
          title: "Jobify",
          location: "57 Ubi Crescent, Unit 03-00, Singapore 408596",
          ceo: "",
          bizDesc: "",
          imgUrl: "images/company/jobify.png",
          hrefTo: "http://jobify.work/"
        },
        {
          title: "FIXH.ME",
          location:
            "#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab,  Khan Porsenchey, Phnom Penh, Cambodia",
          ceo: "",
          bizDesc: "",
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
