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
      <p class="pb-7">
        外国人エンジニアとリモートで仕事をすると、<br />
        ・採用の母数が無限大に。<br />
        ・海外企業との協業や案件受注の可能性。<br />
        ・組織のダイバーシティ、イノベーション、成長促進。<br />
        など、企業としてグローバル市場に目を向けるチャンスに繋がります。<br />
        <br />
        一方、外国人エンジニアと、尚且つリモートでプロジェクトを遂行するのは至難の技。<br />
        ・言語・文化習慣の違いによるコミュニケーションの壁<br />
        ・離れた場所からの日々のマネジメント・継続的なトレーニング・評価の難しさ<br />
        ・異国での法令遵守、コミットメント<br />
        といったことから、二の足を踏んでいる企業も多いのではないでしょうか。<br />
        <br />
        私たちはこのような悩みをもつ企業・チームをご支援しています。
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
    <customer-section />
    <cloud-crew-flow />
    <v-container>
      <section-title>cloud crew 利用シーン・プラン</section-title>
      <v-row class="left-right-card pb-3">
        <v-col cols="12" sm="7" class="card-content">
          <ul>
            <li>
              cloud crewでは、以下のようなプランを用意しています。<br /><br />
            </li>
            <li>
              1人あたり1,000-1,200usd/月<br />
              120時間インターンします。<br /><br />
            </li>
            <li>ブリッジSE（日本人インターン） 1,000usd-/月<br /><br /></li>
            <li>
              *採用には別途費用がかかります。
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
const Tagline = () => import("@/components/Tagline.vue");
const SectionTitle = () => import("@/components/SectionTitle.vue");
const CardTypeTwo = () => import("@/components/CardTypeTwo.vue");
const CustomerSection = () => import("@/components/parent/CustomerSection.vue");
const CloudCrewFlow = () => import("@/components/parent/CloudCrewFlow.vue");
export default {
  name: "CloudCrewPage",
  components: {
    CloudCrewFlow,
    CustomerSection,
    // eslint-disable-next-line vue/no-unused-components
    CardTypeTwo,
    SectionTitle,
    Tagline
  },
  data() {
    return {
      title: "cloud-crew | A2Aデジタルジャパン",
      description:
        "リモートがあたりまえのポスト・コロナ時代。必要なエンジニアをリモートですぐに集められる。超オンデマンドのITエンジニア供給サービス。",
      keywords:
        "アフターコロナ, コロナ, cloud crew, A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル",
      tagline: [
        "cloud crew",
        "外国人学生エンジニアのリモートインターン<br />リモートが当たり前のポストコロナ時代。<br />今こそ国をまたぎ、本当に一緒に働きたい人を発掘・育成しませんか？<br />アジアGDP成長率トップのカンボジアから、選び抜かれたエンジニアの卵が本気で挑戦します。",
        "images/cloud_crew/cloud-crew-color.png"
      ],
      helps: [
        {
          number: "01",
          title: "変動費化",
          description: "Withコロナの時代。開発コストを変動費化します。"
        },
        {
          number: "02",
          title: "質の揃ったエンジニアの確保",
          description:
            "私たちが運営しているエンジニア養成機関（カンボジアの難関大学：キリロム工科大学）が人材確保・育成支援します。"
        },
        {
          number: "03",
          title: "グローバル化促進",
          description:
            "英語・リモートの開発プロジェクトが御社の可能性を広げます。"
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
