<template>
  <div>
    <h1 class="send-title">Send Us A Message</h1>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first_name" label="First Name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="last_name" label="Last Name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail*"
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
            label="Your message here...*"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn
        outlined
        x-large
        color="accent"
        class="btn text-capitalize"
        @click="submitForm"
        :disabled="!valid"
      >
        <span class="px-12">Send</span>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    valid: true,
    first_name: "",
    last_name: "",
    message: "",
    messageRules: [v => !!v || "Message is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
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
      // eslint-disable-next-line no-console
      console.log("Submitted!!!!!!!!!!!!!!!!!!!!!");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
@media #{map-get($display-breakpoints, 'sm-and-up')}
    .send-title
        font-weight: bold
        font-size: 45px
</style>
