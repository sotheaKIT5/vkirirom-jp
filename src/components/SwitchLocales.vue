<template>
  <div class="switch-locale">
    <v-select
      v-model="$i18n.locale"
      :items="languages"
      item-text="title"
      item-value="lang"
      label="Languages:"
      outlined
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "SwitchLocales",
  data() {
    return {
      languages: [
        { title: "日本語", lang: "ja", flag: "jp" },
        { title: "English", lang: "en", flag: "eng" }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.switch-locale
    position: fixed
    bottom: 0
    left: 0
    width: 125px
    padding: 5px 8px 5px 5px
    border-bottom-right-radius: 50px !important
    border-top-right-radius: 50px !important
    z-index: 99
</style>
