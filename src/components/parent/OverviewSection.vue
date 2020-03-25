<template>
  <v-container id="overview">
    <section-title>会社概要</section-title>
    <v-row
      :style="[
        $vuetify.breakpoint.xs ? { 'flex-direction': 'column-reverse' } : {}
      ]"
    >
      <v-col cols="12" sm="6">
        <h3 style="margin-bottom: 30px">A2A Town (Cambodia) Co., LTd.</h3>
        <table>
          <tr>
            <th>設立</th>
            <td>2011年12月</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>13 millionUSD</td>
          </tr>
          <tr>
            <th>CEO</th>
            <td>猪塚 武</td>
          </tr>
          <tr>
            <th>親会社</th>
            <td>vKirirom Pte.Ltd.</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>
              1. リゾート経営Vkirirom Pine Resort <br />
              2.大学経営Kirirom Institute of Technology <br />
              3. 不動産サービス <br />
              4. IT開発サービス
            </td>
          </tr>
        </table>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          height="100%"
          max-height="355px"
          src="@/assets/images/pvk.png"
          alt="pvk view"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "OverviewSection",
  components: { SectionTitle }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
table
    border-collapse: collapse
    border-spacing: 0
    width: 100%
table, th, td
    border: 0 solid black
    border-collapse: collapse
table > tr
    /*border-bottom: 1px solid #eee*/
    margin-right: 15px
th, td
    padding: 5px 0
    text-align: left
    line-height: 30px
table > tr > th
    font-weight: bold
    font-size: 14px
    padding-right: 30px
    vertical-align: top
table > tr > td
    font-weight: normal
    font-size: 14px
@media #{map-get($display-breakpoints, 'sm-and-up')}
  table > tr > th
    font-size: 16px
  table > tr > td
    font-size: 16px
</style>
