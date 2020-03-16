<template>
  <v-container>
    <section-title>Concept</section-title>
    <p class="text">
      vkirirom Japan was established as an organization that enables Japanese
      companies to catch up with the Fourth Industrial Revolution and implement
      strategies to grow in a global market. The world is confused by the
      emergence of technologies that disrupt industries. vkirirom Solve
      management issues by utilizing the human and technical services of Kirirom
      Japan
    </p>
    <card-left-right
      v-for="(concept, id) in concepts"
      :key="id"
      :title="concept.title"
      :description="concept.description"
      btn-txt="価値メリット"
      :card-url="concept.goTo"
      :style="[
        id % 2 === 0
          ? { 'flex-direction': 'row-reverse', 'padding-left': '80px' }
          : { 'padding-right': '80px' },
        $vuetify.breakpoint.smAndDown
          ? { 'padding-left': 'unset', 'padding-right': 'unset' }
          : {}
      ]"
    />
    {{ concepts.title }}
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
import CardLeftRight from "../CardLeftRight";
export default {
  name: "Concept",
  components: { CardLeftRight, SectionTitle },
  data() {
    return {
      reverse: "flex-direction:row-revers;",
      concepts: [
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        },
        {
          title: "Continuous business as part of promotion in house project",
          description:
            "We provide an advanced artificial intelligent software, keeping the quality and security in mind. We aim to reach the highest number of users and more comprehensive user experience to satisfy clients. With AI services from A2A Digital, you can add the capabilities like images or video analysis, natural language, Object detection, etc.",
          goTo: "/test"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.text
  font-weight: 500
  font-size: 18px
  line-height: 21px
  text-align: center
</style>
