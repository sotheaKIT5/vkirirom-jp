<template>
  <div class="bg">
    <v-container>
      <section-title>cloud crew ご利用の流れ</section-title>
      <v-row>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_1.png"
            />
            <h4 class="text-center">お申し込み</h4>
            <v-img
              class="hidden-sm-and-up mx-auto"
              width="50"
              contain
              src="@/assets/images/cloud_crew/arrow.png"
            />
            <v-img
              class="hidden-xs-only child"
              width="65"
              contain
              src="@/assets/images/cloud_crew/arrow-down.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent even">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_2.png"
            />
            <h4 class="text-center">オンライン説明&JDヒアリング</h4>
            <v-img
              class="hidden-sm-and-up mx-auto"
              width="50"
              contain
              src="@/assets/images/cloud_crew/arrow.png"
            />
            <v-img
              class="hidden-xs-only even-child"
              width="65"
              contain
              src="@/assets/images/cloud_crew/arrow-up.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_3.png"
            />
            <h4 class="text-center">crewのご紹介</h4>
            <v-img
              class="hidden-sm-and-up mx-auto"
              width="50"
              contain
              src="@/assets/images/cloud_crew/arrow.png"
            />
            <v-img
              class="hidden-xs-only child"
              width="65"
              contain
              src="@/assets/images/cloud_crew/arrow-down.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent even">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_4.png"
            />
            <h4 class="text-center">面談</h4>
            <v-img
              class="hidden-sm-and-up mx-auto"
              width="50"
              contain
              src="@/assets/images/cloud_crew/arrow.png"
            />
            <v-img
              class="hidden-xs-only even-child"
              width="65"
              contain
              src="@/assets/images/cloud_crew/arrow-up.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_5.png"
            />
            <h4 class="text-center">契約</h4>
            <v-img
              class="hidden-sm-and-up mx-auto"
              width="50"
              contain
              src="@/assets/images/cloud_crew/arrow.png"
            />
            <v-img
              class="hidden-xs-only child"
              width="65"
              contain
              src="@/assets/images/cloud_crew/arrow-down.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="2" class="pa-sm-0">
          <div class="parent even">
            <v-img
              class="image-avatar"
              contain
              src="@/assets/images/cloud_crew/flow_6.png"
            />
            <h4 class="text-center">ラボ型インターン開始</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle";
export default {
  name: "CloudCrewFlow",
  components: { SectionTitle }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.bg
  background-image: url("../../assets/images/cloud_crew/bg.png")
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  padding-bottom: 50px
.parent
  position: relative
  width: 165px
  margin: 0 auto
  .child
    position: absolute
    bottom: -25px
    right: -25px
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .parent
    position: relative
    width: 100%
    .image-avatar
      width: 140px
      margin: 0 auto
    .child
      position: absolute
      top: 125px
      right: -25px
    .even-child
      position: absolute
      top: 125px
      right: -25px
  .even
    padding-top: 165px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .parent
    position: relative
    width: 165px
    .image-avatar
      width: 165px
    .child
      position: absolute
      top: 125px
      right: -25px
    .even-child
      position: absolute
      top: 125px
      right: -25px
  .even
    padding-top: 165px
</style>
