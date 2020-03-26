<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <overview-section />
    <group-company />
    <vk-structure-section />
    <management-section />
    <contact-section />
  </div>
</template>

<script>
import OverviewSection from "../components/parent/OverviewSection";
import ContactSection from "../components/parent/ContactSection";
import ManagementSection from "../components/parent/ManagementSection";
import VkStructureSection from "../components/parent/VkStructureSection";
import GroupCompany from "../components/parent/GroupCompany";
export default {
  name: "AboutPage",
  components: {
    GroupCompany,
    VkStructureSection,
    ManagementSection,
    ContactSection,
    OverviewSection
  },
  data() {
    return {
      title: "About | A2Aデジタルジャパン",
      description:
        "リバースイノベーションを巻き起こそう！A2Aデジタルジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して産業革命4.0に対応したソリューションを提供します。",
      keywords:
        "A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>

<style scoped></style>
