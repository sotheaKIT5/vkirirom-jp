<template>
  <div id="contact">
    <section-title>お問い合わせ</section-title>
    <div class="main mb-5 mb-sm-12">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="pa-0">
            <v-card flat tile color="accent" class="pa-3">
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
                    /> </v-btn
                ></span>
                <span class="title">ADDRESS</span>
              </div>
              <div>
                <p class="text">
                  東京オフィス 〒150-0043 <br />
                  東京都渋谷区道玄坂一丁目10番8号 <br />
                  渋谷道玄坂東急ビル1F 渋谷PLUG&PLAY内 <br />
                  キリロム工科大学 東京事務所
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
                <span class="title">PHONE NUMBER</span>
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
                <span class="title">EMAIL</span>
              </div>
              <div>
                <p class="text">
                  info@kit.edu.kh
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" class="pa-0">
            <v-card flat tile color="white" class="pa-3 pb-12">
              <h1 class="send-title">Send Us A Message</h1>
              <form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="first_name"
                      label="First Name"
                      @input="$v.first_name.$touch()"
                      @blur="$v.first_name.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="last_name"
                      label="Last Name"
                      @input="$v.last_name.$touch()"
                      @blur="$v.last_name.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="E-mail*"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="message"
                      :error-messages="messageErrors"
                      required
                      auto-grow
                      name="message"
                      label="Your message here...*"
                      @input="$v.message.$touch()"
                      @blur="$v.message.$touch()"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                  outlined
                  x-large
                  color="accent"
                  class="btn text-capitalize"
                  @click="submit"
                >
                  <span class="px-12">Send</span>
                </v-btn>
              </form>
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
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import SectionTitle from "../SectionTitle";
export default {
  name: "ContactSection",
  components: { SectionTitle },
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    message: { required }
  },

  data: () => ({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push("Message is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    }
  }
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
.send-title
  font-weight: bold
  font-size: 30px
  text-align: center
.btn:hover
  background-color: #74bec2
  color: #FFFFFF
.btn:hover span
  color: #FFFFFF
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
  .send-title
    font-weight: bold
    font-size: 45px
</style>
