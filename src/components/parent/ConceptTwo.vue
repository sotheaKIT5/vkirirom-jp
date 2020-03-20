<template>
  <v-container>
    <section-title>教育・研究サービス</section-title>
    <h2 class="subtitle pb-3">
      A2Aグループの資産をフル活用し、実開発・研究開発を通したグローバルIT人材の育成環境を提供します。
    </h2>
    <p class="text">
      多くの日本企業では、海外事業の拡大、国内外拠点のシナジー強化、最新テクノロジーの活用を背景に、グローバルな視点でのITソリューションが求められています。海外への事業拡大に伴う必要性に加えて、M&Aやテクノロジーの進化に伴って海外と英語でコミュニケーションをする必要性が増えていることでしょう。
      <br />
      A2Aデジタルジャパンは、グローバルな開発リソースだけでなく、御社スタッフが自ら成長する環境を合わせて提供します。実案件をグローバルな環境で成し遂げる力、新しい知識・素晴らしい経験が得られ、御社の成長に貢献できます。
    </p>
    <card-left-right
      v-for="(concept, id) in concepts"
      :key="id"
      :title="concept.title"
      :description="concept.description"
      :card-url="concept.goTo"
      :img-url="concept.imgSrc"
      btn-txt="続きを読む"
      :style="[
        id % 2 === 0
          ? { 'flex-direction': 'row-reverse', 'padding-left': '80px' }
          : { 'padding-right': '80px' },
        $vuetify.breakpoint.smAndDown
          ? { 'padding-left': 'unset', 'padding-right': 'unset' }
          : {}
      ]"
    />
    {{ concepts.title }}
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
import CardLeftRight from "../CardLeftRight";
export default {
  name: "ConceptTwo",
  components: { CardLeftRight, SectionTitle },
  data() {
    return {
      reverse: "flex-direction:row-revers;",
      concepts: [
        {
          title: "-実務の継続- 研修の一環として自社案件を推進",
          description:
            "現在実施しているプロジェクトを引き続き研修の一環として進めることが可能です。拠点を海外に移し、海外のメンバーと一緒に、既存の業務を推進していくことができます。",
          imgSrc: "images/concept/4.png",
          goTo: "/#value"
        },
        {
          title: "-使える英語- 開発者(英語話者)と案件のマネジメント",
          description:
            "英語環境で自社案件の開発に携わることで、業務に直結し、実務経験を生かした語学習得が可能です。開発現場での実践的なコミュニケーションと英語環境での試行錯誤を通して、意思疎通を図るサバイバル力を養うことができます。",
          imgSrc: "images/concept/5.png",
          goTo: "/#value"
        },
        {
          title: "-安心・安全- 日本人学生受入実績のあるITトップ大学",
          description:
            "オールインクルーシブで集中できる安全な研修環境をご提供します。実績のある全寮制の大学でモチベーションの高い学生と共同生活の中で、多文化理解を得ることができます。",
          imgSrc: "images/concept/6.png",
          goTo: "/kit"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.subtitle
  font-weight: bold
  font-size: 20px
  line-height: 24px
.text
  font-weight: 500
  font-size: 14px
  line-height: 17px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .subtitle
    font-size: 20px
    line-height: 24px
  .text
    font-size: 18px
    line-height: 21px
</style>
