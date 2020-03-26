<template>
  <div>
    <v-container>
      <section-title>キリロム工科大学との産学連携</section-title>
      <p>
        A2Aデジタルジャパンはキリロム工科大学と協同し、様々な先端ITテクノロジーを遂行しています。
      </p>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="shadow pa-3">
            <v-img src="../assets/images/page_investor/image-1.png" />
            <p>
              A2Aデジタルジャパンはキリロム工科大学と協同し、様々な先端ITテクノロジーを遂行しています。
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="shadow pa-3">
            <v-img src="../assets/images/page_investor/image-2.png" />
            <p>
              A2Aデジタルジャパンはキリロム工科大学と協同し、様々な先端ITテクノロジーを遂行しています。
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="shadow pa-3">
            <v-img src="../assets/images/page_investor/image-3.png" />
            <p>
              A2Aデジタルジャパンはキリロム工科大学と協同し、様々な先端ITテクノロジーを遂行しています。
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <section-title>エコ・テクノロジーパーク参加</section-title>
      <v-row class="left-right-card pb-3">
        <v-col cols="12" sm="6" class="card-content">
          <p class="card-text">
            国連のSDGsの方向性に沿った形で、エコツーリズムを基盤に社会問題が発生しないようデザインされた学びとイノベーションの街づくりに参加しています。
          </p>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="6">
          <v-img
            class="card-img mx-auto"
            width="100%"
            contain
            src="../assets/images/page_investor/image-4.png"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <section-title>バーチャルカンパニーへ出資</section-title>
      <p>
        先端技術IT学科には、バーチャルカンパニー（VO）という仕組みがあります。大学内に起業された仮想的な企業です。
        カンボジアや日本に向けた新規事業や大学外の企業との共同事業・受託事業を展開しています。
        そのVCに実際に投資してくれる投資家が見つかれば、そのままスタートアップ企業としてスピンアウトすることができます。
      </p>
      <div class="d-flex flex-row flex-wrap">
        <card-type-six
          class="company-card"
          v-for="(company, id) in companies"
          :key="id"
          :title="company.title"
          :description="company.description"
          :ceo="company.ceo"
          :bizDesc="company.bizDesc"
          :imgUrl="company.imgUrl"
          btn-txt="続きを読む"
          :card-url="company.goTo"
          :hrefTo="company.hrefTo"
        />
      </div>
    </v-container>
    <v-container>
      <section-title>キリロム工科大学の学生寮不動産投資</section-title>
      <v-row class="left-right-card pb-3">
        <v-col cols="12" sm="6" class="card-content">
          <p class="card-text">
            キリロム工科大学は全寮制大学ですが、学生寮を世界中の（個人）投資家の皆様に所有していただき、大学が長期間借り受ける形で運用しています。一番小さな学生寮は500万円以下で購入することができ、初期の契約は９年間固定、利回りは年間7%〜10%と日本よりも高い水準になっています。契約の解除権は投資家のみに付与されていますので、一年前の告知でいつでも自己利用や転売に切り替えることができるようになっています。学生寮オーナーには無料でキリロムのリゾートに宿泊する権利や学生との交流、学生寮オーナー間のコミュニティーへの参加などが投資の副次的なメリットとしてあります。詳細は学生寮オーナーズプログラムの専用ウェブサイトをご覧ください。
            <br />
            <br />
            詳細は学生寮オーナーズプログラムの専用ウェブサイトをご覧ください
          </p>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="6">
          <v-img
            class="card-img mx-auto"
            width="100%"
            contain
            src="../assets/images/page_investor/image-5.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle";
import CardTypeSix from "../components/CardTypeSix";
export default {
  name: "InvestorPage",
  components: { CardTypeSix, SectionTitle },
  data() {
    return {
      companies: [
        {
          title: "KEEN",
          description:
            "ソフトウェアソリューション会社。機械学習、AI、電気通信技術、ソフトウェア開発",
          imgUrl: "images/page_investor/logo-1.png"
        },
        {
          title: "Chain Solution",
          description: "モバイル・ウェブ開発とUI/UXデザイン会社。",
          imgUrl: "images/page_investor/logo-2.png"
        },
        {
          title: "Dexpertise",
          description:
            "データソリューション会社。<br /> ビジネスがより良い判断ができるように、データを元に改善策を提供する。",
          imgUrl: "images/page_investor/logo-3.png"
        },
        {
          title: "DGK (Digital Green Kyoudai)",
          description:
            "デジタルマーケティング会社。<br /> 写真・動画撮影と編集、ウェブコンテンツ作成、Facebook マーケティング",
          imgUrl: "images/page_investor/logo-4.png"
        },
        {
          title: "Earlyphant",
          description:
            "デジタルビジネスソリューション会社。<br /> コンサルティング、ERPアプリケーション、ウェブ開発",
          imgUrl: "images/page_investor/logo-5.png"
        },
        {
          title: "Escott",
          description: "様々なセンサーを使用し、IoTを進める会社",
          imgUrl: "images/page_investor/logo-6.png"
        },
        {
          title: "Zeal",
          description: "VR、AR、複合現実に取り組んでいる会社。",
          imgUrl: "images/page_investor/logo-7.png"
        },
        {
          title: "DynamiXD",
          description: "ネットワークインフラ会社。",
          imgUrl: "images/page_investor/logo-8.png"
        },
        {
          title: "Canopy",
          description:
            "SEO、SEM、ウェブコンテンツ作成、データ分析などを行うデジタルマーケティング会社",
          imgUrl: "images/page_investor/logo-9.png"
        },
        {
          title: "K-Studio",
          description: "VR、AR、複合現実に取り組んでいる会社。",
          imgUrl: "images/page_investor/logo-10.png"
        },
        {
          title: "COIN",
          description: "ネットワークインフラ会社。",
          imgUrl: "images/page_investor/logo-11.png"
        },
        {
          title: "Len of Reality",
          description:
            "SEO、SEM、ウェブコンテンツ作成、データ分析などを行うデジタルマーケティング会社",
          imgUrl: "images/page_investor/logo-12.png"
        },
        {
          title: "KCyberOP",
          description: "VR、AR、複合現実に取り組んでいる会社。",
          imgUrl: "images/page_investor/logo-13.png"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.shadow
  box-shadow: 0px 4px 10px rgba(187, 187, 187, 0.5)
.left-right-card
  max-width: 1185px
  margin-left: auto
  margin-right: auto
  flex-direction: column-reverse
.left-right-card:nth-last-child(1)
  padding-bottom: 0
.card-content
  display: flex
  flex-flow: column
  width: 100%
.card-title
  font-weight: bold
  font-size: 18px
  margin-bottom: 16px
.card-img
  width: 70%
.num
  font-weight: bold
  font-size: 72px
  line-height: 86px
.title
  font-size: 16px !important
  line-height: 20px
.text
  font-size: 14px
@media #{map-get($display-breakpoints, 'sm-only')}
  .left-right-card
    flex-flow: row
  .num
    font-size: 40px
  .title
    font-size: 14px !important
    line-height: 17px
  .text
    font-size: 10px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .left-right-card
    flex-flow: row
  .card-content
    width: 50%
    justify-content: center
  .card-title
    font-size: 24px
    line-height: 43px
    margin-bottom: 15px
  .card-text
    font-size: 16px
  .card-img
    width: 100%
  .title
    font-size: 16px !important
    line-height: 20px
  .text
    font-size: 16px
</style>
