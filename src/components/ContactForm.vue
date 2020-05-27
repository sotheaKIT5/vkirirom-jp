<template>
  <div>
    <h1 class="send-title">ご相談・お問い合わせ</h1>
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      v-on:submit.prevent="checkIfRecaptchaVerified"
    >
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="last_name"
            :rules="lnameRules"
            label="姓"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first_name"
            :rules="fnameRules"
            label="名"
          ></v-text-field>
        </v-col>
        <v-col>
          <span>ご相談内容を選択してください*</span>
          <v-radio-group class="pl-3 mt-0" v-model="purpose" :mandatory="true">
            <v-radio label="ラボ型インターン" value="ラボ型インターン"></v-radio>
            <v-radio label="オフショア開発" value="オフショア開発"></v-radio>
            <v-radio label="エンジニア採用" value="エンジニア採用"></v-radio>
            <v-radio
              label="バーチャルカンパニーへの出資検討"
              value="バーチャルカンパニーへの出資検討"
            ></v-radio>
            <v-radio label="その他" value="その他"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="メールアドレス*"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            :rules="messageRules"
            required
            name="message"
            label="お問い合わせ内容*"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            :loadRecaptchaScript="true"
            sitekey="6LcNNfQUAAAAAPXrGq9Y4K9uCisGeR_aEcSoLaIc"
          >
          </vue-recaptcha>
        </v-col>
      </v-row>
      <v-btn
        outlined
        x-large
        color="accent"
        class="btn text-capitalize"
        :disabled="!valid || bot"
        :loading="loading"
        v-on="on"
        @click="submit"
        @click.stop="dialog = true"
      >
        <span class="px-12">送信</span>
      </v-btn>
      <div v-if="submitted" class="green--text pt-3">
        {{ alert }}
      </div>
    </v-form>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "ContactForm",
  components: { VueRecaptcha },
  data: () => ({
    purpose: "その他",
    dialog: false,
    valid: true,
    first_name: "",
    last_name: "",
    lnameRules: [v => v.length <= 32 || "姓は32文字以下にする必要があります。"],
    fnameRules: [v => v.length <= 32 || "名は32文字以下にする必要があります。"],
    purposeRules: [v => !!v || "ご相談内容が選択されていません。"],
    message: "",
    messageRules: [v => !!v || "お問い合わせ内容を入力してください。"],
    email: "",
    emailRules: [
      v => !!v || "メールアドレスを入力してください。",
      v =>
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "メールアドレスに誤りがあります。"
    ],
    lazy: false,
    bot: true,
    loading: false,
    submitted: false,
    alert: ""
  }),

  methods: {
    onCaptchaVerified: function() {
      const self = this;
      self.bot = false;
    },
    onCaptchaExpired: function() {
      this.$refs.recaptcha.reset();
    },
    submit() {
      this.$refs.form.validate();
      let self = this;
      self.loading = true;
      self.alert = "";
      self.axios
        .post(
          "https://a2a-digital-backend.herokuapp.com/api/send-email-japan",
          {
            first_name: self.first_name,
            last_name: self.last_name,
            email: self.email,
            tel: "",
            message: self.message,
            purpose: self.purpose
          }
        )
        .then(function(response) {
          self.output = response.data;
        })
        .catch(function(error) {
          self.output = error;
        })
        .finally(() => {
          self.loading = false;
          self.submitted = true;
          self.alert = "お問合せありがとうございます。メッセージを承りました。";
          self.reset();
        });
    },
    reset() {
      this.$refs.form.reset();
      this.$refs.recaptcha.reset();
      this.purpose = "その他";
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.send-title
    font-weight: bold
    font-size: 30px
    text-align: center
.btn:hover
    background-color: #74bec2
    color: #FFFFFF
.btn:hover span
    color: #FFFFFF
</style>
