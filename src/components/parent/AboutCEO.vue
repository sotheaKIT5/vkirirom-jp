<template>
  <div>
    <v-container class="pb-5">
      <section-title>CEO Profile</section-title>
      <v-row class="flex-column-reverse flex-md-row">
        <v-col cols="12" md="7">
          <h2 class="name pb-3 text-center text-md-left">Takeshi Izuka</h2>
          <p class="text text-center text-md-left">
            Representative Director <br />
            (Founder of vKiriromPteLtd)
          </p>
          <h2 class="font-weight-regular text-center text-md-left">【経歴】</h2>
          <table>
            <tr>
              <th>1998年</th>
              <td>デジタルフォレスト社創業</td>
            </tr>
            <tr>
              <th>2009年</th>
              <td>デジタルフォレスト社をNTTコミュニケーションズに売却</td>
            </tr>
            <tr>
              <th>2011年</th>
              <td>A2A Town (Cambodia) Co., Ltd 設立</td>
            </tr>
            <tr>
              <th>2018年</th>
              <td>vKirirom Japan Inc 設立</td>
            </tr>
          </table>
        </v-col>
        <v-col cols="12" md="5">
          <v-img
            contain
            class="image"
            max-width="420"
            src="@/assets/images/people/person-1.png"
            alt="ceo"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card flat tile color="accent" class="pb-10">
      <v-container>
        <section-title>CEO Message</section-title>
        <p class="msg">
          我々の事業は、日本の教育課題を解決するためにキリロム工科大学を設立することからスタートしました。設立から4年目を迎え、この大学は「無料で最先端のITを学べる大学」として認知され、『カンボジアのシリコンバレー』とも噂されるようになりました。<br />
          寄付や助成金に頼らず、中核事業であるKIT（キリロム工科大学）と、周辺事業（IT・デジタル事業、観光事業、不動産事業）とのシナジーにより、収益を上げながら都市づくりを加速させています。今後都市間の世界的競争が激化する中で、アジアの高原にネイチャーと先端技術が融合した街づくりをおこなっています。<br />
          <br />
          1967年香川県出身。早稲田大学理工学部卒、東京工業大学修士課程修了。アクセンチュアを経て、政治家を志すが落選。1998年に株式会社デジタルフォレストを設立し日本No.1(2006年)のアクセス解析ソフトの会社になる。2009年にNTT
          Communication社に事業売却。2011年よりキリロム工科大学を中心とした学園都市「vキリロムネイチャーシティ」を立ち上げる。キリロム工科大学は英語で先端ITを学ぶ大学でカンボジアのトップの学生と日本人学生が共に全寮制で学ぶ。持株会社である、vKirirom
          Pte. Ltd.は「デロイト アジア太平洋地域テクノロジー Fast
          500」に2017年、2018年の２年連続ランクイン。<br />
          世界的な起業家組織EOの日本支部会長、カンボジア支部会長、アジアの理事を歴任。日本人起業家のグローバルネットワークである一般社団法人WAOJE
          代表理事。
        </p>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "AboutCEO",
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
table>tr>th
    font-weight: normal !important
    min-width: 80px
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
.image
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25)
    border-radius: 4px
    margin-left: auto
    margin-right: auto
.name
    font-size: 30px
.text
    font-size: 24px
.msg
    font-size: 14px
@media #{map-get($display-breakpoints, 'sm-and-up')}
    table
        max-width: 525px
        margin-left: auto
        margin-right: auto
    table > tr > th
        font-size: 16px
    table > tr > td
        font-size: 16px
    .name
        font-size: 45px
    .msg
        font-size: 16px
@media #{map-get($display-breakpoints, 'md-and-up')}
    table
        margin: 0
    .image
        margin: 0 0 0 auto
</style>
