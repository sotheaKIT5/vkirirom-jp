<template>
  <div id="contact">
    <section-title>お問い合わせ</section-title>
    <div class="main mb-5 mb-sm-12">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="pa-0">
            <v-card flat tile color="accent" class="px-3 py-5">
              <div>
                <span>
                  <v-btn
                    x-small
                    outlined
                    fab
                    color="white"
                    :ripple="false"
                    class="ma-2"
                  >
                    <v-img
                      height="20"
                      contain
                      src="@/assets/icons/briefcase.svg"
                    />
                  </v-btn>
                </span>
                <span class="title">住所</span>
              </div>
              <div>
                <p class="text">
                  東京オフィス 〒150-0043 <br />
                  東京都渋谷区道玄坂一丁目10番8号 <br />
                  渋谷道玄坂東急ビル1F 渋谷PLUG&PLAY内 <br />
                  vKirirom Japan 株式会社
                </p>
              </div>
              <div>
                <span>
                  <v-btn
                    x-small
                    outlined
                    fab
                    color="white"
                    :ripple="false"
                    class="ma-2"
                  >
                    <v-img
                      height="20"
                      contain
                      src="@/assets/icons/mobile.svg"
                    /> </v-btn
                ></span>
                <span class="title">電話番号</span>
              </div>
              <div>
                <p class="text">
                  070-4357-6523
                </p>
              </div>
              <div>
                <span>
                  <v-btn
                    x-small
                    outlined
                    fab
                    color="white"
                    :ripple="false"
                    class="ma-2"
                  >
                    <v-img
                      height="17"
                      contain
                      src="@/assets/icons/message.svg"
                    /> </v-btn
                ></span>
                <span class="title">メールアドレス</span>
              </div>
              <div>
                <p class="text">
                  a2adigital-japan@kit.edu.kh
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" class="pa-0">
            <v-card flat tile color="white" class="pa-3 pb-12">
              <contact-form />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <div class="c_map">
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8141834149046!2d139.69636761525817!3d35.656949480200005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5653c4c109%3A0xa0de01daa1aae46e!2sPlug%20and%20Play%20Shibuya!5e0!3m2!1sen!2skh!4v1584697452350!5m2!1sen!2skh"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </div>
    </v-container>
  </div>
</template>

<script>
const SectionTitle = () => import("@/components/SectionTitle.vue");
const ContactForm = () => import("@/components/ContactForm.vue");
export default {
  name: "ContactSection",
  components: { ContactForm, SectionTitle }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.main
  border-top: solid 1px #74bec2
  border-bottom: solid 1px #74bec2
.title
  font-weight: bold
  font-size: 18px
  color: #A5DBDE
.text
  font-weight: normal
  font-size: 14px
  color: #FFFFFF
  padding-left: 50px
.map
  width: 100%
  height: 280px
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .main
    background: rgb(116,190,194)
    background: linear-gradient(90deg, rgba(116,190,194,1) 0%, rgba(116,190,194,1) 50%, rgba(255,255,255,1) 50%)
  .title
    font-size: 24px
  .text
    font-size: 16px
    padding-left: 70px
</style>
