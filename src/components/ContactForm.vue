<template>
  <div>
    <h1 class="send-title">開発に関するご相談</h1>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="last_name" label="名"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first_name" label="姓"></v-text-field>
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
            auto-grow
            name="message"
            label="お問い合わせ内容*"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="360">
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            x-large
            color="accent"
            class="btn text-capitalize"
            :disabled="!valid"
            v-on="on"
            @click="submitForm"
            @click.stop="dialog = true"
          >
            <span class="px-12">送信</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
            お問合せありがとうございます。メッセージを承りました。
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    dialog: false,
    valid: true,
    first_name: "",
    last_name: "",
    message: "",
    messageRules: [v => !!v || "お問い合わせ内容を入力してください"],
    email: "",
    emailRules: [
      v => !!v || "メールアドレスを入力してください",
      v =>
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    lazy: false
  }),

  methods: {
    submitForm() {
      this.$refs.form.validate();
      let currentObj = this;
      this.axios
        .post(
          "https://a2a-digital-backend.herokuapp.com/api/send-email-japan",
          {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            message: this.message
          }
        )
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
      this.reset();
    },
    reset() {
      this.$refs.form.reset();
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
