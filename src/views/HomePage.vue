<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <switch-locales />
    <home-hero
      :title="home_hero.title"
      :quote="home_hero.quote"
      :btn-txt="home_hero.btnTxt"
      :bg-img="home_hero.bgImg"
    />
    <HelloI18n />
    <concept />
    <services-section />
    <value-benefits-section />
    <why-us-section />
    <customer-section />
    <management-section />
    <div class="l_section">
      <v-btn color="blue" x-large>Vuetify</v-btn>
    </div>
  </div>
</template>

<script>
import HomeHero from "../components/HomeHero";
import Concept from "../components/parent/Concept";
import ServicesSection from "../components/parent/ServicesSection";
import ValueBenefitsSection from "../components/parent/ValueBenefitsSection";
import WhyUsSection from "../components/parent/WhyUsSection";
import CustomerSection from "../components/parent/CustomerSection";
import ManagementSection from "../components/parent/ManagementSection";
import HelloI18n from "../components/HelloI18n";
import SwitchLocales from "../components/SwitchLocales";

export default {
  name: "Home",
  components: {
    SwitchLocales,
    ManagementSection,
    CustomerSection,
    WhyUsSection,
    ValueBenefitsSection,
    ServicesSection,
    Concept,
    HomeHero,
    HelloI18n
  },
  data() {
    return {
      solutionTitle: "Solutions",
      title: "A2A Digital | For Industry Revolution 4.0",
      description:
        "A2A Digital provides you the best solution for AI Development, system development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.",
      keywords:
        "a2a digital, first choice for software solution, IT Solution In Cambodia, Artificial Intelligence In Cambodia, AI in cambodia, Internet Of Thing in cambodia, IOT in cambodia, IT company in cambodia, Top1 IT solution company in cambodia, AI development in cambodia, IOT development service in cambodia, Cloud Computing service in cambodia, RPA in cambodia, RPA service in cambodia, Blockchain in cambodia, PWA in cambodia,  PWA website in cambodia, VR/AR in cambodia, Odoo ERP Solution in cambodia, Digital Marketing service in cambodia, Cyber Security in cambodia, web development company in cambodia, mobile app development in cambodia, ui/ux design company in cambodia, top ui/ux design in cambodia",
      logo: require("../assets/logo/logo_color.svg"),
      home_hero: {
        title: "Start Your Project with A2A Digital Today",
        quote:
          "Whether you're looking for system development, enterprise solutions, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.",
        btnTxt: "Start Your Solution",
        bgImg: require("@/assets/component/home-hero/bg-img-hero.png")
      }
    };
  }
};
</script>
