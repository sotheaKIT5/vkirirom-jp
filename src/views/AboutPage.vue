<template>
  <div>
    <overview-section />
    <contact-section />
  </div>
</template>

<script>
import OverviewSection from "../components/parent/OverviewSection";
import ContactSection from "../components/parent/ContactSection";
export default {
  name: "AboutPage",
  components: { ContactSection, OverviewSection }
};
</script>

<style scoped></style>
