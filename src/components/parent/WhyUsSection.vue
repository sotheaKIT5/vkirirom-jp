<template>
  <div class="why-us">
    <v-img
      :style="[
        $vuetify.breakpoint.smAndDown
          ? { height: '500px' }
          : { height: '700px' }
      ]"
      contain
      src="../../assets/images/why-us.png"
    >
      <section-title style="position: absolute; left: 0; top: 0; width: 100%">
        Why Us?
      </section-title>
      <v-container class="fill-height">
        <v-row class="d-flex align-center">
          <v-col class="black--text" cols="12" sm="7">
            <h4 class="pb-6">
              Vキリロムジャパンは、日本企業が第4次産業革命にキャッチアップし、グローバルな市場で成長していくための戦略を共に実行する組織として設立されました。様々な業界を破壊するテクノロジーの登場により世界は混乱しています。vキリロムジャパンの人的・技術的サービスを活用することで経営課題を解決しましょう
            </h4>
            <read-more btn-txt="続きを読む" card-url="/" />
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-card flat tile color="accent" class="pb-12">
      <v-container>
        <section-title class="white--text">特徴の具体的な説明</section-title>
        <h4 class="white--text pb-7 text-center">
          システムクリエートは1980年の創業より、基幹業務システム開発一筋で、多くの企業様のご要望にお応えしてまいりました。そのため、業務システム開発の知識、経験が豊富な開発者(エンジニア)が多数在籍しております。近年、旧開発言語に対応できる会社が減っている分野においても豊富な実績でご満足頂ける対応が可能です。だからこそ、業務システムにおいて、提案から保守サポートまで、ワンストップで対応ができるのです。
        </h4>
        <v-row no-gutters>
          <v-col cols="12" md="4" v-for="(help, id) in helps" :key="id">
            <v-card tile color="#A5DBDE" elevation="1" class="pa-3 fill-height">
              <v-row class="fill-height" no-gutters>
                <v-col cols="4" class=" d-flex align-center justify-center">
                  <span class="num white--text">{{ help.number }}</span>
                </v-col>
                <v-col class="white--text">
                  <h4 class="pb-5">{{ help.title }}</h4>
                  <p class="pb-3">{{ help.description }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <h4 class="text-center white--text pt-7">
          他社で断られた案件も、まずは一度ご相談ください。お手伝いできることがあるかもしれません
        </h4>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle";
import ReadMore from "../ReadMore";
export default {
  name: "WhyUsSection",
  components: { ReadMore, SectionTitle },
  data() {
    return {
      helps: [
        {
          number: "01",
          title: "豊富で継続的なエンジニア養成",
          description:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          number: "02",
          title: "将来にわたるコストダウン",
          description:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          number: "03",
          title: "豊富で継続的なエンジニア養成",
          description:
            "自社スタッフの育成コスト、オフショア開発からの辞めない人材獲得、現地法人化によるコスト削減及び売上拡大"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.num
  font-weight: bold
  font-size: 72px
  line-height: 86px
</style>
