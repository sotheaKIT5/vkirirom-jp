<template>
  <div>
    <v-speed-dial
      v-model="fab"
      direction="top"
      transition="slide-y-reverse-transition"
      persistent
      absolute
      class="hidden-sm-and-up"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          style="position: absolute; left: -1000px; bottom: 20px"
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-message</v-icon>
        </v-btn>
      </template>
      <div
        style="position: absolute; right: 800px; bottom: 80px; width: 350px"
        :v-on="fab"
      >
        <chat-bot />
      </div>
    </v-speed-dial>
    <v-btn
      class="chatbot-btn"
      @click="hidden = !hidden"
      color="blue darken-2"
      dark
      fab
    >
      <transition name="fade" mode="out-in">
        <v-icon v-if="!hidden">mdi-close</v-icon>
        <v-icon v-else>mdi-message</v-icon>
      </transition>
    </v-btn>
    <div id="chatbot-mobile" v-show="!hidden">
      <chat-bot />
    </div>
  </div>
</template>

<script>
import ChatBot from "../ChatBot";
export default {
  name: "ChatbotBtn",
  components: { ChatBot },
  data() {
    return {
      fab: false,
      hidden: true
    };
  },
  methods: {
    chatControl() {
      const x = document.getElementById("chatbot-mobile");
      if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.chatbot-btn
  position: fixed
  right: 20px
  bottom: 20px
  z-index: 101
#chatbot-mobile
  z-index: 100
  position: fixed
  overflow: hidden
  margin-left: 4px
  margin-right: auto
  bottom: 50px
  width: 98vw
  height: 91vh
  box-shadow: 0 4px 16px rgba(0,0,0,.25)
  border-radius: 10px
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .chatbot-btn
    right: 40px
    bottom: 50px
  #chatbot-mobile
    overflow: hidden
    right: 20px
    bottom: 80px
    width: 350px
    height: 500px
    box-shadow: 0 4px 16px rgba(0,0,0,.25)
    border-radius: 10px
</style>
