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
      <section-title>cloud crew 誕生の背景</section-title>
      <p>
        いま世界は大きな変化のタイミングにあり、ITの重要度そして期待感は日増しに高まっています。顧客のニーズに最速で対応し課題を解決し続けられる企業のみが選ばれ、成長し続けます。<br />
        <br />
        一方、日本国内でのエンジニアの獲得難易度は高止まりを続けており、コスト・リードタイムともに顧客ニーズとは逆行しているのが現状です。<br />
        <br />
        このような状況の中、<br />
        「今すぐ開発したい案件があるが、獲得コストが高くリードタイムも長い」<br />
        「企画の新規性が高く、新たに正社員雇用をするのは不安」<br />
        「緊急案件があるが、瑣末なタスクに貴重なプロパーのリソースを割いている」<br />
        といった悩みを解決するために、時々の開発ニーズに合わせて、いますぐに必要なだけのエンジニアをチーム編成し、開発に着手できるサービス「cloud
        crew」を提供することにいたしました。<br />
        <br />
        在宅勤務があたりまえになったいま、開発チームのクラウド化を推進しやすくもなっているのです。
      </p>
    </v-container>
    <v-card flat tile color="accent" class="pb-12">
      <v-container>
        <section-title class="white--text">
          cloud crew 3つの特徴
        </section-title>
        <h4 class="white--text font-weight-regular pb-7">
          本サービスは、当社関連会社が運営する海外技術大学のネットワークを活用し、開発リソース確保を支援いたします。企業のニーズに合わせてITエンジニアのチームを即日編成します。余計な時間とコストをかけずに手軽に自社にエンジニアチームを作ることで、システム開発・運用を支援します。もちろん、即日解散も可能です。
        </h4>
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="4" v-for="(help, id) in helps" :key="id">
            <v-card tile color="#A5DBDE" elevation="1" class="pa-3 fill-height">
              <v-row class="fill-height" no-gutters>
                <v-col cols="4" class="d-flex align-center justify-center">
                  <span class="num white--text">{{ help.number }}</span>
                </v-col>
                <v-col class="white--text d-flex align-center">
                  <div>
                    <h4 class="title font-weight-black pb-3">
                      {{ help.title }}
                    </h4>
                    <ul v-html="help.description" class="text pl-0 pb-3"></ul>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <p class="my-7 white--text">
          「cloud
          crew」を通じて、システム開発案件への柔軟なリソース確保の成功事例を増やし、ITビジネスの発展に貢献してまいります。<br />
          <br />
          （ご依頼いただける業務例）<br />
          ECサイト開発 SPA開発 業務システム運用保守<br />
          運用テスト アノテーション業務 動画編集<br />
          <br />
          HTML, CSS, Javascript, PHP, テスト自動化Javascript,<br />
          Vue.js,React, Python, C, Scala, Node js, Mongo DB, MySQL <br />
          Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After
          Effect, Adobe Indesign, Figma, Adobe XD, Lumion
        </p>
        <div class="d-flex">
          <v-btn
            color="#ff8c00"
            x-large
            class="btn white--text mx-auto"
            href="https://forms.gle/eTF87bc2VRfsgeqB6"
            target="_blank"
          >
            問合せフォーム
          </v-btn>
        </div>
      </v-container>
    </v-card>
    <v-container>
      <section-title>cloud crew 利用シーン・プラン</section-title>
      <v-row class="left-right-card pb-3">
        <v-col cols="12" sm="7" class="card-content">
          <ul>
            <li>
              cloud crewでは、以下のようなプランを用意しています。<br />
              <br />
              時間単位で簡易作業できるエンジニアがほしい<br />
              オンラインかつ時間単位でタスクを行い、レポートもしくは納品ができる「ライト」プラン（1,200円/時間(税抜)〜）をおすすめします。<br /><br />
            </li>
            <li>
              開発案件をそのまま発注したい<br />
              cloud
              crewディレクターが開発案件とチームをマネジメントする「ディレクション」プラン（30万円/月(税抜)〜）をおすすめします。<br /><br />
            </li>
            <li>
              cloud crewを自社のバーチャルエンジニア組織として活用したい<br />
              編成されたcloud
              crewごと、御社のエンジニア組織配下に置いて業務を遂行する「パートナー」プラン（都度見積もり）をご検討ください。
            </li>
          </ul>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="5">
          <v-img
            class="card-img mx-auto"
            aspect-ratio="1"
            src="@/assets/images/why-us.png"
          />
        </v-col>
      </v-row>
      <div class="d-flex">
        <v-btn
          color="#ff8c00"
          x-large
          class="btn white--text mx-auto"
          href="https://forms.gle/eTF87bc2VRfsgeqB6"
          target="_blank"
        >
          問合せフォーム
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import CardTypeTwo from "../components/CardTypeTwo";
const Tagline = () => import("@/components/Tagline.vue");
const SectionTitle = () => import("@/components/SectionTitle.vue");
export default {
  name: "CloudCrewPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CardTypeTwo,
    SectionTitle,
    Tagline
  },
  data() {
    return {
      title: "cloud-crew | A2Aデジタルジャパン",
      description:
        "在宅があたりまえのポスト・コロナ時代に対応した新サービス。いますぐに必要なだけエンジニアを集められる従量課金型ITエンジニア供給サービス。",
      keywords:
        "アフターコロナ, コロナ, cloud crew, A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル",
      tagline: [
        "cloud crew",
        "リモートがあたりまえのポスト・コロナ時代。<br />必要なエンジニアをリモートですぐに集められる。<br />超オンデマンドのITエンジニア供給サービス。",
        "images/cloud_crew/cloud-crew-color.png"
      ],
      helps: [
        {
          number: "01",
          title: "エンジニアリソース",
          description:
            "海外で運営しているエンジニア養成教育機関（カンボジアの難関大学：キリロム工科大学）と、その卒業生およびエンジニアネットワークを活用できます"
        },
        {
          number: "02",
          title: "即日チーム編成・解散",
          description:
            "フォームに要件をご登録いただいた後、翌日にはチーム編成ができます。時間単位でエンジニアをご活用いただけます"
        },
        {
          number: "03",
          title: "スケーラブル",
          description: "1名から200名まで、必要に応じてエンジニアを増減できます"
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

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
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
