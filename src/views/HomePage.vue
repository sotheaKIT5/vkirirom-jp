<template>
  <div id="home-page">
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <home-hero />
  </div>
</template>

<script>
const HomeHero = () =>
  import(/* webpackMode: "eager" */ "@/components/HomeHero.vue");
export default {
  name: "Home",
  components: {
    HomeHero
  },
  data() {
    return {
      title:
        "A2Aデジタルジャパン | 開発チームもクラウドでつくる時代「cloud crew」",
      description:
        "開発チームもクラウドでつくる時代「cloud crew」必要なエンジニアをリモートですぐに集められる。超オンデマンドのITエンジニア供給サービスです。",
      keywords:
        "アフターコロナ, コロナ, cloud crew, A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>

<style lang="sass" scoped>
#home-page
  padding: 0 !important
</style>
