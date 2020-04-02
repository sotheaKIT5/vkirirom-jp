<template>
  <v-container>
    <section-title>Our Milestones</section-title>
    <!-- Vertical Timeline -->
    <section id="conference-timeline">
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <div class="timeline-article d-flex flex-column-reverse d-sm-block">
          <div class="content-left-container text-container">
            <div class="content-left text-parent">
              <h2 class="title">設立...</h2>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <v-img
                height="100%"
                src="@/assets/images/milestone/milestone_1.png"
              />
            </div>
          </div>
          <div class="meta-date">
            <span class="date">2011.12</span>
            <span class="bullet"></span>
          </div>
        </div>

        <div class="timeline-article d-flex flex-column d-sm-block">
          <div class="content-left-container order-xs2">
            <div class="content-left">
              <v-img
                height="100%"
                src="@/assets/images/milestone/milestone_2.png"
              />
            </div>
          </div>
          <div class="content-right-container text-container">
            <div class="content-right text-parent">
              <h2 class="title">カンボジア政府との契約</h2>
              <p class="text">
                山手線の1.5倍に相当する9000ヘクタールのキリロム国立公園について、政府と50年間の専用リース契約を締結し、エコツーリズム事業を開始しました。
              </p>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">2012.9</span>
            <span class="bullet"></span>
          </div>
        </div>

        <div class="timeline-article d-flex flex-column-reverse d-sm-block">
          <div class="content-left-container text-container">
            <div class="content-left text-parent">
              <h2 class="title">キリロム工科大学の設立</h2>
              <p class="text">
                英語で高度なITを学ぶために大学を設立。カンボジア人学生は奨学金により授業料と生活費が無料です。
                豊かな自然のなかで起業家を輩出する大学として、デジタル変革を促進する個人や企業を支援しています。
              </p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <v-img
                height="100%"
                src="@/assets/images/milestone/milestone_3.png"
              />
            </div>
          </div>
          <div class="meta-date">
            <span class="date">2014.10</span>
            <span class="bullet"></span>
          </div>
        </div>

        <div class="timeline-article d-flex flex-column d-sm-block">
          <div class="content-left-container order-xs2">
            <div class="content-left">
              <v-img
                height="100%"
                src="@/assets/images/milestone/milestone_4.png"
              />
            </div>
          </div>
          <div class="content-right-container text-container">
            <div class="content-right text-parent">
              <h2 class="title">vキリロムパインリゾートグランドオープン</h2>
              <p class="text">
                カンボジアのエコツーリズムリゾートとして、自然と共存する、SDGsに沿った一生に一度の経験ベースのリゾートを提供します。
              </p>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">2015.5</span>
            <span class="bullet"></span>
          </div>
        </div>

        <div class="timeline-article d-flex flex-column-reverse d-sm-block">
          <div class="content-left-container text-container">
            <div class="content-left text-parent">
              <h2 class="title">A2Aデジタルジャパン株式会社 設立</h2>
              <p class="text">
                Vキリロムキリロムグループの日本事務所としてA2Aデジタルジャパン株式会社を設立しました。日本人学生を募集し、奨学金スポンサー企業を見つける主要な事業として設立されました。
              </p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <v-img
                height="100%"
                src="@/assets/images/milestone/milestone_5.png"
              />
            </div>
          </div>
          <div class="meta-date">
            <span class="date">2018.4</span>
            <span class="bullet"></span>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "Milestones",
  components: { SectionTitle }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
/*===== Vertical Timeline =====
.title
  font-size: 36px !important
  font-weight: bold
  color: #138690
  padding-bottom: 20px
#conference-timeline
  position: relative
  max-width: 920px
  width: 100%
  margin: 0 auto

  .timeline-end
    display: table
    font-size: 18px
    text-transform: uppercase
    background: #a40505
    padding: 15px 23px
    color: #fff
    max-width: 5%
    width: 100%
    text-align: center
    margin: 0 auto

  .conference-center-line
    position: absolute
    width: 3px
    height: 100%
    top: 0
    left: 50%
    margin-left: -2px
    background: #a40505

  .conference-timeline-content
    padding-bottom: 67px

.timeline-article
  width: 100%
  height: 100%
  position: relative
  overflow: hidden
  margin: 20px 0

  .content-left-container, .content-right-container
    max-width: 44%
    width: 100%

  .content-left, .content-right
    position: relative
    width: auto
    background-color: #fff

  .content-left-container
    float: left
    margin-top: 70px

  .content-right-container
    float: right
    margin-top: 70px

  .content-left:before, .content-right:before
    position: absolute
    top: 20px
    font-size: 23px
    color: #fff

  .meta-date
    position: absolute
    top: 0
    left: 50%
    width: 100px
    height: 30px
    margin-left: -50px
    color: #a40505
    border-radius: 0%
    background: #fff
  .text-parent
    display: table-cell
    vertical-align: middle

.bullet
  position: absolute
  top: 30px
  left: 50%
  width: 28px
  height: 28px
  margin-left: -15px
  border-radius: 100%
  background: #a40505

.timeline-article .meta-date
  .date
    display: block
    text-align: center
    font-weight: bold
    font-size: 24px

/*===== // Vertical Timeline =====

/*===== Resonsive Vertical Timeline =====
@media #{map-get($display-breakpoints, 'xs-only')}
  .title
    font-size: 20px !important
  .text-container
    margin-top: 20px !important
  .content-left-container
    margin-top: 20px

  .content-right-container
    margin-top: 20px

  .bullet
    position: absolute
    top: 30px
    left: 17px
    width: 20px
    height: 20px
    border-radius: 100%
    background: #a40505

  #conference-timeline
    .timeline-start, .timeline-end
      margin: 0

    .conference-center-line
      margin-left: 0
      left: 30px

  .timeline-article
    .meta-date
      margin-left: 0
      left: 20px
      .date
        font-size: 18px
        position: absolute
        left: -20px

    .content-left-container, .content-right-container
      max-width: 100%
      width: auto
      float: none
      margin-left: 60px
      min-height: 53px

    .content-left-container
      margin-bottom: 20px

    .content-left, .content-right
      min-height: 65px
/*===== // Resonsive Vertical Timeline =====
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .content-left-container
    float: left
    margin-top: 70px
  .content-right-container
    float: right
    margin-top: 70px
  .content-left, .content-right
    height: 300px
</style>
