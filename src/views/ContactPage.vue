<template>
  <contact-section />
</template>

<script>
const ContactSection = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/ContactSection.vue");
export default {
  name: "ContactPage",
  components: { ContactSection }
};
</script>

<style scoped></style>
