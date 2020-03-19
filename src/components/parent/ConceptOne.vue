<template>
  <v-container>
    <section-title class="mt-7">デジタル開発サービス</section-title>
    <h2 class="subtitle pb-3">
      私たちは、企業が産業革命4.0を乗り切るため経営課題をグローバルチームで解決に導く戦略的開発パートナーです。
    </h2>
    <p class="text">
      Vキリロムジャパンは、日本企業が第4次産業革命にキャッチアップし、グローバルな市場で成長していくための戦略を共に実行する組織として設立されました。様々な業界を破壊するテクノロジーの登場により世界は混乱しています。Vキリロムジャパンの人的・技術的サービスを活用することで経営課題を解決しましょう。
    </p>
    <card-left-right
      v-for="(concept, id) in concepts"
      :key="id"
      :title="concept.title"
      :description="concept.description"
      :card-url="concept.goTo"
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
  name: "ConceptOne",
  components: { CardLeftRight, SectionTitle },
  data() {
    return {
      reverse: "flex-direction:row-revers;",
      concepts: [
        {
          title: "-業務理解力- ビジネス経験豊富なマネジメント",
          description:
            "経営課題解決の真のパートナーとなるために、IT分野でのビジネス経験豊富なマネジメントチームを揃えています。 マネジメントメンバー "
        },
        {
          title: "-工数安定供給-継続的エンジニア 養成・輩出の仕組み",
          description:
            "キリロム工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポートを通して、継続的な人材リソースの確保が可能です。"
        },
        {
          title: "-コストメリット- グローバルなエンジニアを適正価格で",
          description:
            "カンボジアに拠点を置くことで、コストメリットを得ることができます。"
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
