<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <tagline
      :title="tagline[0]"
      :description="tagline[1]"
      :imgSrc="tagline[2]"
    />
    <v-container>
      <p class="mt-12">
        A2AデジタルジャパンではIT人材を求める企業様と外国人エンジニアを結び付けるサービスを提供しています。新興国の優秀なITエンジニアを豊富にそろえており、その技術範囲はAI（人工知能）、ソフトウェア開発、ウェブ開発、デザイン、インフラエンジニア等多岐にわたります。
        豊富な人材の中から、お客様のサービスに最もマッチした技術スキルのエンジニアをお探しいただくことができます。
      </p>
      <card-left-right
        v-for="(concept, id) in concepts"
        :key="id"
        :title="concept.title"
        :description="concept.description"
        :img-url="concept.imgSrc"
        btn-visibility="none"
        :style="[id % 2 === 0 ? { 'flex-direction': 'row-reverse' } : {}]"
      />
      <section-title>奨学金スポンサープログラム</section-title>
      <p>
        キリロム工科大学の奨学金スポンサーとなることで、キリロム工科大学の実践プロジェクトを経験したグローバルIT人材を採用することができます。カンボジア人学生の４年間の学費と生活費の一部は本奨学金から捻出される代わりに、学生は奨学金提供企業で4年間就労します。
      </p>
      <div class="d-flex flex-wrap">
        <card-type-one
          class="service-card"
          v-for="(service, id) in services"
          :key="id"
          :title="service.title"
          :description="service.description"
          :imgUrl="service.imgUrl"
          btn-txt="価値メリット"
          :card-url="service.goTo"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
const Tagline = () =>
  import(/* webpackMode: "eager" */ "@/components/Tagline.vue");
const CardLeftRight = () =>
  import(/* webpackMode: "eager" */ "@/components/CardLeftRight.vue");
const SectionTitle = () =>
  import(/* webpackMode: "eager" */ "@/components/SectionTitle.vue");
const CardTypeOne = () =>
  import(/* webpackMode: "eager" */ "@/components/CardTypeOne.vue");
export default {
  name: "EngineerRecruitmentPage",
  components: { CardTypeOne, SectionTitle, CardLeftRight, Tagline },
  data() {
    return {
      title: "エンジニア採用 | A2Aデジタルジャパン",
      description:
        "A2AデジタルジャパンではIT人材を求める企業様と外国人エンジニアを結び付けるサービスを提供しています。",
      keywords:
        "A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル",
      tagline: [
        "エンジニア採用",
        "A2AデジタルジャパンではIT人材を求める企業様と外国人エンジニアを結び付けるサービスを提供しています",
        "images/page_engineer_recruitment/image-1.png"
      ],
      concepts: [
        {
          title: "客先常駐型ITエンジニア",
          description:
            "準委任契約による客先常駐型で作業が可能です。<br />オフィスに常駐することにより、お客様からのご要望へのレスポンスが早く、さまざまなサポートをすることが可能になります。セキュリティ面で常駐が必要な業務や、生産性を考慮した開発など様々な要望に合わせて、お客様のすぐ隣で作業をすることが可能です。<br /><br />また、外国人エンジニアの日本語スキルは初心者レベルではありますが、すべてのエンジニアの英語スキルはビジネスレベルに達しています。<br />御社内で英語公用語化の取り組みや、英語によるコミュニケーションの促進をお考えの場合、チーム内に英語ができるITエンジニアをコミュニケーションの中心に配置することで、コミュニケーションの促進を実現することが可能です。またIT技術に関しても御社の技術にマッチするエンジニアを派遣いたしますので、御社の業務を止めることなく、実業務と英語コミュニケーション促進の両方を同時に実現することが可能になります。",
          imgSrc: "images/page_engineer_recruitment/image-2.png",
          scrollTo: "#management"
        },
        {
          title: "新興国IT人材マッチングサイト運営",
          description:
            "弊社の提供する新興国向けジョブマッチングプラットフォーム「Jobify」を用いて、豊富な人材の中からマッチする人材を探し出すことができます。<br />日本ではIT人材ニーズがある一方で、その人材の不足が指摘されています。しかし、新興国では若年層の人口が増加し、大学等の高等教育を受けた人材が豊富にそろっています。こうした豊富な人材の中から、マッチする人材を探し出すことができます。",
          imgSrc: "images/page_engineer_recruitment/image-3.png",
          scrollTo: "#flow"
        }
      ],
      services: [
        {
          title: "20倍超の倍率から選ばれた地頭の良い学生",
          imgUrl: "images/page_engineer_recruitment/image-4.png",
          description:
            "学費・生活費無料と高度な教育を提供している結果、カンボジア人の入学生の倍率は20倍を超えます。<br />入学試験では、IQ・英語・数学・面接の試験を行い、ポテンシャルの高さで学生を選考しています。"
        },
        {
          title: "成長企業向けの人材",
          imgUrl: "images/page_engineer_recruitment/image-5.png",
          description:
            "キリロムを訪れた成功した起業家の講義を４年間聞いて育っています。海外大学からの外国人インターン生と触れ合った経験も他のカンボジア大学の卒業生とは違っています。<br />オフショアビジネスよりも成長企業のコア人材として最適です。"
        },
        {
          title: "新卒研修不要な実務経験を積んだ卒業生",
          imgUrl: "images/page_engineer_recruitment/image-6.png",
          description:
            "ITの授業は英語で行います。在学中の実践的なインターンシップ研修を経て、卒業時には2年間程度の実務経験を持った新卒社員となります。全寮制の学校なので学業に集中しています。"
        },
        {
          title: "インターンシップ制度 を利用したラボ型開発",
          imgUrl: "images/page_engineer_recruitment/image-7.png",
          description:
            "IT開発を発注してキリロム工科大学の学生の実力を確認いただくことも可能です。<br />キリロム工科大学では数多くのプロジェクトチームが存在しており、広い範囲で先端IT技術をカバーしています。これまでの実績では、新サービスのプロトタイプ開発がインターンシップに適しています。奨学金スポンサー企業は、インターンシップを通じて学生のスキルだけでなく相性を含めて検討することができます。"
        }
      ]
    };
  },
  methods: {
    getAsset(path) {
      return require("@/assets/" + path);
    }
  }
};
</script>

<style scoped></style>
