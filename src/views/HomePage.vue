<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <home-hero
      :title="home_hero.title"
      :quote="home_hero.quote"
      :btn-txt="home_hero.btnTxt"
      :bg-img="home_hero.bgImg"
      :bg-vdo="home_hero.bgVdo"
    />
    <concept-one />
    <concept-two />
    <services-section />
    <value-benefits-section />
    <why-us-section />
    <customer-section />
    <management-section />
    <lecturer-section />
    <vk-structure-section />
  </div>
</template>

<script>
import HomeHero from "../components/HomeHero";
import ConceptOne from "../components/parent/ConceptOne";
import ServicesSection from "../components/parent/ServicesSection";
import ValueBenefitsSection from "../components/parent/ValueBenefitsSection";
import WhyUsSection from "../components/parent/WhyUsSection";
import CustomerSection from "../components/parent/CustomerSection";
import ManagementSection from "../components/parent/ManagementSection";
import ConceptTwo from "../components/parent/ConceptTwo";
import LecturerSection from "../components/parent/LecturerSection";
import VkStructureSection from "../components/parent/VkStructureSection";

export default {
  name: "Home",
  components: {
    VkStructureSection,
    LecturerSection,
    ConceptTwo,
    ManagementSection,
    CustomerSection,
    WhyUsSection,
    ValueBenefitsSection,
    ServicesSection,
    ConceptOne,
    HomeHero
  },
  data() {
    return {
      solutionTitle: "Solutions",
      title: "vKrirom Japan",
      description: "",
      keywords: "",
      home_hero: {
        title: "新しい時代を新しい仲間と リバースイノベーションを巻き起こそう",
        quote:
          "Vキリロムジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して、成し遂げる力、新しい知識、素晴らしい経験といった御社の成長に貢献する経験をご提供します。",
        btnTxt: "ソリューションを開始する",
        bgImg: "images/bg-img-hero.png",
        bgVdo: "videos/Kirirom-Institute-of-Technology.mp4"
      }
    };
  }
};
</script>
