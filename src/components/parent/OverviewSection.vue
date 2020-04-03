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
            <th>会社名</th>
            <td>
              vKirirom Japan 株式会社 <br />
              (英文社名 vKirirom Japan, Inc. )
            </td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>東京都渋谷区道玄坂１丁目１０番８号</td>
          </tr>
          <tr>
            <th>設立年月日</th>
            <td>2018年4月24日</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>10百万円</td>
          </tr>
          <tr>
            <th>決算期</th>
            <td>12月末日（年1回)</td>
          </tr>
          <tr>
            <th>取引金融機関</th>
            <td>三井住友銀行</td>
          </tr>
          <tr>
            <th>代表者</th>
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
        </table>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img height="100%" src="@/assets/images/city.jpg" alt="city view" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const SectionTitle = () => import("@/components/SectionTitle.vue");
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
    min-width: 100px
table > tr > td
    font-weight: normal
    font-size: 14px
.heading
    font-size: 20px !important
    font-weight: bold !important
@media #{map-get($display-breakpoints, 'sm-and-up')}
  table > tr > th
    font-size: 16px
  table > tr > td
    font-size: 16px
  .heading
    font-size: 30px !important
</style>
