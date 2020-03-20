<template>
  <div id="home-page">
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <home-hero />
    <concept-one />
    <concept-two />
    <services-section />
    <value-benefits-section />
    <why-us-section />
    <management-section />
    <lecturer-section />
    <vk-structure-section />
  </div>
</template>

<script>
const HomeHero = () =>
  import(/* webpackMode: "eager" */ "@/components/HomeHero.vue");
const ConceptOne = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/ConceptOne.vue");
const ServicesSection = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/ServicesSection.vue");
const ValueBenefitsSection = () =>
  import(
    /* webpackMode: "eager" */ "@/components/parent/ValueBenefitsSection.vue"
  );
const WhyUsSection = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/WhyUsSection.vue");
const ManagementSection = () =>
  import(
    /* webpackMode: "eager" */ "@/components/parent/ManagementSection.vue"
  );
const ConceptTwo = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/ConceptTwo.vue");
const LecturerSection = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/LecturerSection.vue");
const VkStructureSection = () =>
  import(
    /* webpackMode: "eager" */ "@/components/parent/VkStructureSection.vue"
  );

export default {
  name: "Home",
  components: {
    VkStructureSection,
    LecturerSection,
    ConceptTwo,
    ManagementSection,
    WhyUsSection,
    ValueBenefitsSection,
    ServicesSection,
    ConceptOne,
    HomeHero
  },
  data() {
    return {
      title: "A2Aデジタルジャパン | アジアDXによる業務改善・システム開発",
      description:
        "バースイノベーションを巻き起こそうA2Aデジタルジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して産業革命4.0に対応したソリューションを提供します。",
      keywords:
        "A2Aデジタルジャパン,キリロム,キリロム工科大学,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>
