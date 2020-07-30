<template>
  <div id="chatbot">
    <div class="inner">
      <div class="chat">
        <chat-bot2 />
      </div>
    </div>
  </div>
</template>

<script>
// import ChatBot from "../components/ChatBot";
import ChatBot2 from "../components/ChatBot2";
// const ChatBot = () => import(/* webpackMode: "eager" */ "../components/ChatBot");
export default {
  name: "AiBot",
  components: { ChatBot2 }
};
</script>

<style lang="sass" scoped>
.ai-bot
    height: 80vh
    width: 100%
    display: flex
    justify-items: center

#chatbot
  overflow: hidden
  height: 100vh
  padding-top: 80px
  margin-top: -80px
  position: relative

.inner
  position: absolute
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-50%)
.chat
  height: 500px
  min-width: 370px
  padding: 15px
  .chatbot-container
    box-shadow: 0 1px 5px rgb(0, 0 , 0, 0.2 )
.main-card
  overflow: auto
  width: 100vw
  height: 100vh
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .inner
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
  .chat
    height: 650px
    width: 400px
@media #{map-get($display-breakpoints, 'md-and-up')}
  .main-card
    max-width: 470px
    width: unset
    height: unset
</style>
