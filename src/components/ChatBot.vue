<template>
  <div class="chatbot-container">
    <div class="head-chat d-flex align-center">
      <v-badge
        bordered
        bottom
        color="rgb(105, 222, 64)"
        dot
        offset-x="12"
        offset-y="12"
      >
        <v-btn color="blue darken-2" dark fab class="elevation-0">
          <v-icon large>mdi-robot</v-icon>
        </v-btn>
      </v-badge>
      <div class="d-flex flex-column pl-3">
        <span class="font-weight-bold">Chatbot</span>
        <span class="overline text-capitalize">Online</span>
      </div>
    </div>
    <div class="botui-container" id="my-bot">
      <bot-ui />
    </div>
  </div>
</template>

<script>
import initBotApp from "../chatbot";
export default {
  name: "ChatBot",
  mounted() {
    initBotApp();
  }
};
</script>

<style lang="sass">
.chatbot-container
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  background-color: #ffffff
.head-chat
  z-index: 0
  padding: 10px 10px
  box-shadow: 0 9.5px 12.7px 0 rgba(0,0,0,.05)
.botui-container
  font-family: inherit !important
  background-color: rgb(234, 238, 243) !important
  ::-webkit-scrollbar
    width: 7px
  ::-webkit-scrollbar-track
    box-shadow: inset 0 0 5px #b0b0b0
  ::-webkit-scrollbar-thumb
    background: #a5a5a5
    border-radius: 10px
    width: 5px
  ::-webkit-scrollbar-thumb:hover
    background: #138690

  .botui-messages-container
    padding-bottom: 0
    .botui-message
      .botui-message-content
        white-space: pre-line
        background-color: #ffffff !important
      .botui-message-content.human
        background-color: #138690 !important
  .botui-actions-container
    padding-top: 0
    .botui-actions-text
      .botui-actions-text-input
        width: 100%
        max-width: 235px
      .botui-actions-text-submit
        background-color: #138690
        border: 0
        border-radius: 10px
    .botui-actions-buttons
      .botui-actions-buttons-button
        background: #ffffff
        color: #138690
        box-shadow: none
        border: 1px solid #138690
        border-radius: 15px
        margin-top: 5px
        margin-bottom: 5px
</style>
