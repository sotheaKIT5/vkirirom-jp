<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <overview-section />
    <main-company />
    <group-company />
    <management-section />
  </div>
</template>

<script>
const OverviewSection = () => import("@/components/parent/OverviewSection.vue");
const ManagementSection = () =>
  import("@/components/parent/ManagementSection.vue");
const GroupCompany = () => import("@/components/parent/GroupCompany.vue");
const MainCompany = () => import("@/components/parent/MainCompany.vue");
export default {
  name: "AboutPage",
  components: {
    MainCompany,
    GroupCompany,
    ManagementSection,
    OverviewSection
  },
  data() {
    return {
      title: "会社概要 | A2Aデジタルジャパン",
      description:
        "リバースイノベーションを巻き起こそう！A2Aデジタルジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して産業革命4.0に対応したソリューションを提供します。",
      keywords:
        "A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>

<style scoped></style>
