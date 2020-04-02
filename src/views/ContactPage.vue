<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <contact-section />
  </div>
</template>

<script>
const ContactSection = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/ContactSection.vue");
export default {
  name: "ContactPage",
  components: { ContactSection },
  data() {
    return {
      title: " お問い合わせ | A2Aデジタルジャパン",
      description:
        "お問合わせはメールアドレスa2adigital-japan@kit.edu.kh、住所〒150-0043東京都渋谷区道玄坂一丁目10番8号渋谷道玄坂東急ビル1F 渋谷PLUG&PLAY内vKirirom Japan 株式会社まで。",
      keywords:
        "A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル"
    };
  }
};
</script>

<style scoped></style>
