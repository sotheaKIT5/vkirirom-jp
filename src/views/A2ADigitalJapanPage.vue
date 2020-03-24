<template>
  <div>
    <about-c-e-o />
    <milestones />
  </div>
</template>

<script>
const AboutCEO = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/AboutCEO.vue");
const Milestones = () =>
  import(/* webpackMode: "eager" */ "@/components/parent/Milestones.vue");
export default {
  name: "A2ADigitalJapanPage",
  components: { Milestones, AboutCEO }
};
</script>

<style scoped></style>
