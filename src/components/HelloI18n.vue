<template>
  <v-card>
    <v-card-title>{{ $t("hello") }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "HelloI18n"
};
</script>

<i18n>
{
  "ja": {
    "hello": "Hello i18n in SFC! Japanese"
  },
  "en": {
    "hello": "Hello i18n in SFC! English"
  }
}
</i18n>
