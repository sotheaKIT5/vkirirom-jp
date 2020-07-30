<template>
  <div id="chatbot">
    <div class="inner">
      <div class="chat">
        <div class="chat-container">
          <div id="Smallchat"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AiBot",
  components: {},
  mounted() {
    let smallChat = document.createElement("script");
    smallChat.setAttribute(
      "src",
      "https://embed.small.chat/T017ZFR9ZLKG018P51DGTA.js"
    );
    smallChat.async = true;
    document.body.appendChild(smallChat);
  }
};
</script>

<style lang="sass">
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
  position: relative
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-50%)
.chat
  padding: 15px
  .chat-container
    text-align: center
    box-shadow: 0 1px 5px rgb(0, 0 , 0, 0.2 )
    #Smallchat
      height: 546px
      iframe
        position: unset !important
      .Icon.Messenger_close
        display: none !important
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .inner
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
  .chat
    height: unset
    .chat-container
      height: 546px
      width: 340px
      #Smallchat
        height: unset
</style>
