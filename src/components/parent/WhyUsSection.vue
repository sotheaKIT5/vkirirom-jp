<template>
  <div id="why-us">
    <section-title>今までにない課題にあたらしい解決方法を</section-title>
    <v-container>
      <v-row class="left-right-card pb-3">
        <v-col cols="12" sm="7" class="card-content">
          <h1 class="card-title">
            アジア・デジタルトランスフォーメーション(アジアDX)による解決方法を提供
          </h1>
          <p class="card-text">
            私たちは単なる外部業者としてではなく<br />
            グローバル展開・企業デジタル化をリードし<br />
            企業の成長を促進するチームとしてお客様をサポートします
          </p>
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
    </v-container>
    <v-card flat tile color="accent" class="pb-12">
      <v-container>
        <section-title class="white--text">
          課題に合わせたキリロムの活用
        </section-title>
        <h4 class="white--text font-weight-regular pb-7">
          単なる外部業者としてではなく、<br />
          グローバル展開・企業デジタル化をリードし<br />
          必要な戦略を実行するプロジェクトとして活用いただけます
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
                    <ul v-html="help.description" class="text pl-4 pb-3"></ul>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "WhyUsSection",
  components: { SectionTitle },
  data() {
    return {
      helps: [
        {
          number: "01",
          title: "豊富で継続的なエンジニア養成・輩出の仕組み",
          description:
            "<li>キリロム工科大学との連携</li><li>現地オフショア企業との連携</li><li>日本におけるエンジニアパートナーのネットワーク</li><li>アフターサポート</li>"
        },
        {
          number: "02",
          title: "オフショア開発",
          description:
            "<li>日本のマネジメントとインドの技術力を提供</li><li>英語できるPM育成</li>"
        },
        {
          number: "03",
          title: "海外展開サポート",
          description: "<li>マーケット調査</li><li>現地法人設立</li>"
        }
      ]
    };
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
  .num
    font-size: 40px
  .title
    font-size: 14px !important
    line-height: 17px
  .text
    font-size: 10px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .left-right-card
    display: flex
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
