<template>
  <v-container id="management">
    <section-title>マネジメントメンバー</section-title>
    <v-row class="d-flex px-3 px-md-0">
      <card-type-four
        v-for="(people, id) in management"
        :key="id"
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
  name: "ManagementSection",
  components: { SectionTitle, CardTypeFour },
  data() {
    return {
      management: [
        {
          name: "猪塚 武",
          position: "Consultant Team",
          imgSrc: "images/people/person-1.png"
        },
        {
          name: "定松 真理子",
          position: "Cambodia Marketing Team",
          imgSrc: "images/people/person-2.png"
        },
        {
          name: "黒瀬 千尋",
          position: "Japan Marketing Team",
          imgSrc: "images/people/person-3.png"
        },
        {
          name: "間島 靖恵",
          position: "Technology Team",
          imgSrc: "images/people/person-4.png"
        },
        {
          name: "別宮 健三郎",
          position: "Consultant Team",
          imgSrc: "images/people/person-5.png"
        },
        {
          name: "岡本Hicki",
          position: "Cambodia Marketing Team",
          imgSrc: "images/people/person-6.png"
        },
        {
          name: "安田 幸正",
          position: "Japan Marketing Team",
          imgSrc: "images/people/person-7.png"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
