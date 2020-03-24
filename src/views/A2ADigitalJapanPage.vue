<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <about-c-e-o />
    <milestones />
  </div>
</template>

<script>
const AboutCEO = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/AboutCEO.vue");
const Milestones = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/Milestones.vue");
export default {
  name: "A2ADigitalJapanPage",
  components: { Milestones, AboutCEO },
  data() {
    return {
      title: "What's A2A Digital Japan? | A2Aデジタルジャパン",
      description:
        "リバースイノベーションを巻き起こそう！A2Aデジタルジャパンは、アジア・デジタルトランスフォーメーション(アジアDX)によるグローバルな環境を通して産業革命4.0に対応したソリューションを提供します。",
      keywords:
        "A2Aデジタルジャパン,キリロム,キリロム工科大学,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>

<style scoped></style>
