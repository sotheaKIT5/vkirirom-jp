<template>
  <v-container id="overview">
    <section-title>会社概要</section-title>
    <v-row
      :style="[
        $vuetify.breakpoint.xs ? { 'flex-direction': 'column-reverse' } : {}
      ]"
    >
      <v-col cols="12" sm="6">
        <h2 class="heading mb-3">vKirirom Japan 株式会社</h2>
        <table>
          <tr>
            <th>資本金</th>
            <td>10百万円</td>
          </tr>
          <tr>
            <th>議決権</th>
            <td>vKirirom Pte. Ltd. 100%</td>
          </tr>
          <tr>
            <th>代表取締役社長</th>
            <td>猪塚武</td>
          </tr>
          <tr>
            <th>取締役</th>
            <td>有澤和歌子</td>
          </tr>
          <tr>
            <th>取締役</th>
            <td>黒瀬千尋</td>
          </tr>
          <tr>
            <th>監査役</th>
            <td>別宮健三郎</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>IT事業、マーケティング支援事業</td>
          </tr>
          <tr>
            <th><h2 class="heading mt-5 mb-3">沿革</h2></th>
          </tr>
          <tr>
            <th>2011</th>
            <td>A2A Town (Cambodia) Co., Ltd 設立</td>
          </tr>
          <tr>
            <th>2014</th>
            <td>vKirirom Pte. Ltd.設立</td>
          </tr>
          <tr>
            <th>2014</th>
            <td>キリロム工科大学設立</td>
          </tr>
          <tr>
            <th>2018</th>
            <td>vKirirom Japan株式会社設立</td>
          </tr>
          <tr>
            <th>2018</th>
            <td>vKirirom International School(小学校) 設立</td>
          </tr>
        </table>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img height="100%" src="@/assets/images/city.jpg" alt="city view" />
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
    padding: 2px 0
    text-align: left
    line-height: 30px
table > tr > th
    font-weight: bold
    font-size: 14px
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
