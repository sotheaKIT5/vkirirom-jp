<template>
  <v-container id="lecturer">
    <section-title>技術サポートメンバー</section-title>
    <v-row class="d-flex px-3 px-md-0">
      <card-type-four
        v-for="(people, id) in management"
        :key="id"
        :name="people.name"
        :position="people.position"
        :img-src="people.imgSrc"
      />
    </v-row>
  </v-container>
</template>

<script>
import CardTypeFour from "../CardTypeFour";
import SectionTitle from "../SectionTitle";
export default {
  name: "LecturerSection",
  components: { SectionTitle, CardTypeFour },
  data() {
    return {
      management: [
        {
          name: "Leo Amaradoss",
          position: "Lecturer",
          imgSrc: "images/people/person-8.jpg"
        },
        {
          name: "K.Dinesh Kumar",
          position: "Lecturer",
          imgSrc: "images/people/person-9.jpg"
        },
        {
          name: "Vignesh Manoharan",
          position: "Lecturer",
          imgSrc: "images/people/person-10.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
