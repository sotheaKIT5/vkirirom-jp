<template>
  <h1 class="section-title py-6 py-sm-12"><slot /></h1>
</template>

<script>
export default {
  name: "SectionTitle"
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.section-title
    font-size: 35px
    text-align: center
    padding-top: 25px
    padding-bottom: 25px
    color: #303030
@media #{map-get($display-breakpoints, 'md-and-up')}
  .section-title
    font-size: 45px
    padding-top: 50px
    padding-bottom: 50px
</style>
