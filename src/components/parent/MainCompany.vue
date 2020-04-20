<template>
  <div>
    <v-container id="main-company">
      <section-title>グループ企業</section-title>
      <v-row>
        <v-col cols="12">
          <h2 class="heading mb-3">沿革</h2>
          <table>
            <tr>
              <th>2011年12月</th>
              <td>
                カンボジア、プノンペンにA2A Town (Cambodia) Co,
                Ltd.を資本金200,000,000 Rielで設立
              </td>
            </tr>
            <tr>
              <th>2013年1月</th>
              <td>ヴィキリロムパインリゾートの立ち上げ、プレオープン</td>
            </tr>
            <tr>
              <th>2013年3月</th>
              <td>
                カンボジア王国政府とエコツーリズム投資プロジェクトに対するコン<br />
                セッションランド契約を締結
              </td>
            </tr>
            <tr>
              <th>2014年2月</th>
              <td>vKirirom Pte. Ltd.をシンガポールに設立</td>
            </tr>
            <tr>
              <th>2014年10月</th>
              <td>
                vKirirom Nature City学園都市開発プロジェクト開始<br />
                キリロム工科大学（KIT）をプレスタート<br />
                第1期入学生受入
              </td>
            </tr>
            <tr>
              <th>2015年5月</th>
              <td>ヴィキリロムパインリゾートのグランドオープニング</td>
            </tr>
            <tr>
              <th>2016年1月</th>
              <td>ヴィキリロムホリデーホーム事業を開始</td>
            </tr>
            <tr>
              <th>2016年6月</th>
              <td>A2A Town Co, Ltd.資本金を8,000,000 USDに増額</td>
            </tr>
            <tr>
              <th>2018年1月</th>
              <td>キリロム工科大学学生寮オーナーズプログラムを開始</td>
            </tr>
            <tr>
              <th>2018年4月</th>
              <td>
                vKirirom Japan株式会社を東京都に設立<br />
                日本国内におけるA2Aのマーケティング支援事業を開始
              </td>
            </tr>
            <tr>
              <th>2018年9月</th>
              <td>ヴィキリロムインターナショナルスクール（小学校）開校</td>
            </tr>
          </table>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="main-company">
      <section-title>グループ企業・事業一覧</section-title>
      <v-row>
        <v-col cols="12">
          <h2 class="heading mb-3">
            シンガポール<br />
            vKirirom Pte. Ltd.
          </h2>
          <table>
            <tr>
              <th>所在地</th>
              <td>
                57 Ubi Crescent, Unit 03-00, Singapore 408596
              </td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>猪塚武</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                グループ本社、グローバルIT事業
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2 class="heading mb-3">
            カンボジア<br />
            A2A Town (Cambodia) Co., Ltd.
          </h2>
          <table>
            <tr>
              <th>所在地</th>
              <td>
                #12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab, Khan
                Porsenchey, Phnom Penh, Cambodia
              </td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>猪塚武</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                1. vKirirom Pine Resort運営<br />
                2.不動産開発サービス <br />
                3.大学運営: キリロム工科大学<br />
                4.ITサービス事業 <br />
                <div class="pl-7 pl-sm-12">
                  A2A Digital: オフショア開発、ERP導入<br />
                  Jobify: カンボジア向けジョブマッチングプラットフォーム運営<br />
                  Fixh.me:
                  カンボジア向けハウスメインテナンスプラットフォーム運営
                </div>
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const SectionTitle = () => import("@/components/SectionTitle.vue");
export default {
  name: "MainCompany",
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
    margin-right: 15px
th, td
    padding: 2px 0
    text-align: left
    line-height: 30px
table > tr > th
    font-weight: bold
    font-size: 14px
    vertical-align: top
    width: 100px
table > tr > td
    font-weight: normal
    font-size: 14px
.heading
    font-size: 20px !important
    font-weight: bold !important
@media #{map-get($display-breakpoints, 'sm-and-up')}
    table > tr > th
        font-size: 16px
        width: 150px
    table > tr > td
        font-size: 16px
    .heading
        font-size: 30px !important
</style>
