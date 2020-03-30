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
        先端技術IT学科には、バーチャルカンパニー（VO）という仕組みがあります。大学内に起業された仮想的な企業です。<br />
        カンボジアや日本に向けた新規事業や大学外の企業との共同事業・受託事業を展開しています。<br />
        そのVCに実際に投資してくれる投資家が見つかれば、そのままスタートアップ企業としてスピンアウトすることができます。
      </p>
      <div class="d-flex flex-row flex-wrap mt-5 mt-sm-10">
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
          :btnVisibility="company.btnVisibility"
        >
          <v-chip
            v-for="(tag, id) in company.tags"
            :key="id"
            class="chip ma-1 px-1 py-0"
            color="#E6F0F6"
            label
            text-color="primary"
          >
            <span class="ma-0" v-html="tag" />
          </v-chip>
        </card-type-six>
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
          title: "Jobify",
          description:
            "Jobifyは求人マッチングプラットフォームです。 私たちは、求職者、特に新卒の学生に、私たちの幅広い就職機会へのアクセスを提供します。 従業員の採用を検討している企業の場合、市場で最高の候補者がいることを保証します。\n",
          imgUrl: "images/company/jobify.png",
          hrefTo: "http://www.jobify.works/",
          tags: ["HR"]
        },
        {
          title: "FIXH.ME",
          description:
            "Fixh.meは、サービスプロバイダーを、電気機器、水道、電気などの家庭の問題に直面している人々に接続するプラットフォームです。 2018年に、現在カンボジアのプノンペンで事業を行っている100人以上のサービスプロバイダーと共に4人の創設メンバーから始めました。",
          imgUrl: "images/company/fixhme.png",
          hrefTo: "https://fixh.me/",
          tags: ["カスタマーサービス"]
        },
        {
          title: "Earlyphant",
          description:
            "Earlyphantは、企業のビジネス運営の改善を支援することを目的としています。<br />既存のエンタープライズ向け製品をカスタマイズすることで自動化を導入し、より使いやすいソリューションを提供します。",
          imgUrl: "images/page_investor/logo-5.png",
          tags: ["エンタープライズ向 <br />けソリューション"],
          btnVisibility: "none"
        },
        {
          title: "Casstack",
          description:
            "VoIPとチャットボットを利用し、音声とテキストを通じて顧客中心(customer-centric)のビジネス成長を支援するために設立されました。取得したデータをAI技術で分析し、ユーザ企業の売上に貢献します。",
          imgUrl: "images/page_investor/logo-14.png",
          hrefTo: "https://www.casstack.com",
          tags: ["コミュニケーション", "分析"]
        },
        {
          title: "Len of Reality",
          description:
            "Len of Realityは、仮想現実の最先端技術を通じて言語を学習する古典的な方法を革新する破壊的な教育プラットフォームプロバイダーです。",
          imgUrl: "images/page_investor/logo-12.png",
          hrefTo: "http://www.lenofreality.com/",
          tags: ["教育"]
        },
        {
          title: "Zeal",
          description:
            "Zealのコアバリューは、情熱を持って世界をより良く変えることができると信じています。 私たちは、人々が世界をより良く変えるのに役立つ技術的なソリューションと最新のテクノロジーを提供することを目指しています。",
          imgUrl: "images/page_investor/logo-7.png",
          tags: ["建設技術(VR/AR)"],
          btnVisibility: "none"
        },
        {
          title: "Dexpertise",
          description:
            "Dexpertize：Webアプリケーション開発、データウェアハウジング、ビッグデータ、IoTを専門としています。 企業のソリューションプロバイダーを目指し、データに基づいてより適切な意思決定を支援します。",
          imgUrl: "images/page_investor/logo-3.png",
          tags: ["エンタープライズ向<br />けソリューション"],
          btnVisibility: "none"
        },
        {
          title: "KCyberOP",
          description:
            "当社のセキュリティソリューションを利用して、すべての問題を分析し、最新の技術を使用して資産を保護します。",
          imgUrl: "images/page_investor/logo-13.png",
          tags: ["エンタープライズ向<br />けソリューション"],
          btnVisibility: "none"
        },
        {
          title: "COIN",
          description:
            "COINがホストするサービスプロバイダーは、信頼できる信頼できるパブリッククラウドとプライベートクラウドを配布します。 私たちは、拡張性が高く、安全で、最適化されたデータセンターを調べます。",
          imgUrl: "images/page_investor/logo-11.png",
          tags: ["ITインフラ（クラウド）"],
          btnVisibility: "none"
        },
        {
          title: "K-Studio",
          description:
            "K-Studioは、3D-VR-180ビデオ、および最新のWeb開発に特化しています。<br />同社は2019年9月に設立され、8人の才能あるデジタルデザイナー、コンテンツクリエーター、開発者が従事しています。",
          imgUrl: "images/page_investor/logo-10.png",
          tags: ["マーケティング", "180 VR movie"],
          btnVisibility: "none"
        },
        {
          title: "KEEN",
          description:
            "KEEN社は、お客様のビジネスの革新を支援するために設立されました。<br />>洗練されたAIソリューションや、プロジェクションマッピングを利用してお客様のブランドを宣伝します。<br />当社は、最新の技術知識を適用することで最高の顧客満足度を提供いたします。",
          imgUrl: "images/page_investor/logo-1.png",
          tags: ["ソフトウェア開発"],
          btnVisibility: "none"
        },
        {
          title: "Escott",
          description:
            "ESCOTTはIoTを使用して、キリロムで直面している問題の解決方法を提供しています。中でも現在注力しているのはSmart Lockerです。物理的な鍵は不要で、スマートフォンに表示されたRQコードを読取ることで鍵を開けることができます。",
          imgUrl: "images/page_investor/logo-6.png",
          tags: ["ロボット工学", "IoT"],
          btnVisibility: "none"
        },
        {
          title: "Canopy",
          description:
            "Canopyは2019年に設立された仮想企業で、デジタルプラットフォームを通じてKITのブランド認知度を世界中の学生や関係者に広めることにより、グローバルデジタルマーケティングに注力しています。",
          imgUrl: "images/page_investor/logo-9.png",
          tags: ["デジタルマーケティング"],
          btnVisibility: "none"
        },
        {
          title: "DGK (Digital Green Kyoudai)",
          description:
            "デジタルマーケティングを利用して、お客様の製品/サービスの広告を行います。今日の製品やサービスの広告には高品質なデジタルコンテンツが必要です。<br />私たちと一緒に、デジタルマーケティングの世界に挑戦してみましょう。",
          imgUrl: "images/page_investor/logo-4.png",
          tags: ["マーケティング"],
          btnVisibility: "none"
        },
        {
          title: "DynamiXD",
          description:
            "Webサイトの構築する場合のネットワークインフラストラクチャを構築するための技術を提供します。",
          imgUrl: "images/page_investor/logo-8.png",
          tags: ["ITインフラ（ネットワーク）"],
          btnVisibility: "none"
        },
        {
          title: "ex-C4K",
          description:
            "C4Kは、さまざまなリソースを活用して日常生活をにより便利にすることに重点を置いています。自動化システムや、機能をより簡単に使うための抽象的ユーザインターフェースを提供しています。",
          imgUrl: "images/page_investor/logo-15.png",
          tags: ["ITインフラ（ネットワーク）"],
          btnVisibility: "none"
        },
        {
          title: "Chain Solution",
          description:
            "チェーンは、モバイルアプリケーション開発に焦点を当てています。 私たちは単により便利なライフスタイルのために研究開発を行っています。",
          imgUrl: "images/page_investor/logo-2.png",
          hrefTo: "https://chain-solution.jimdofree.com/",
          tags: ["ソフトウェア開発"]
        },
        {
          title: "IGNITE",
          description:
            "IGNITEは、IOTテクノロジーを再生可能エネルギーおよびクリーンエネルギーを利用し、持続可能な最も効率的な未来をもたらすことに重点を置いています。 さらに、持続可能な環境を構築し、廃棄物管理とゴミのリサイクルによって廃棄物を有用な方法で再利用することを目指しています。",
          imgUrl: "images/page_investor/logo-16.png",
          hrefTo: "#",
          tags: ["太陽光発電"],
          btnVisibility: "none"
        },
        {
          title: "FLIb",
          description:
            "Flibは、新しい学習方法と教室の仕組みによる、よりインタラクティブで効率的な学習を提供しています。 学校システムのデジタル化と標準化を支援します。 最小限の労力と紙で学校を管理できるようにします。",
          imgUrl: "images/page_investor/logo-17.png",
          hrefTo: "#",
          tags: ["教育"],
          btnVisibility: "none"
        },
        {
          title: "AIM",
          description:
            "AIMは2019年に設立され、革新的なアイデアで「一生に一度の体験」を生み出すことに焦点を当てています。 現在注力しているプロジェクトはフードトラックプロジェクトとモリンガ改修プロジェクトです。 IT仮想企業と協力してITとホスピタリティを統合し、顧客満足度を高める取り組みを行っています。",
          imgUrl: "images/page_investor/logo-18.png",
          hrefTo: "#",
          tags: ["ホスピタリティサービス"],
          btnVisibility: "none"
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
.chip
  font-size: 12px !important
  height: auto !important
  text-align: center
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
