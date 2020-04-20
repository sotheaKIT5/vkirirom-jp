<template>
  <div>
    <v-container>
      <section-title>Job Recruitment</section-title>
      <h2 class="text-center font-weight-light">
        WHAT EXCITES YOU? <br />
        CHECK HERE OUR AVAILABLE POSITION
      </h2>
      <v-tabs v-model="category" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <label>
        <input type="text" v-model="selectedCategory" />
      </label>
      <div class="filter">
        <label>
          <input type="radio" v-model="selectedCategory" value="All" /> All
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Marketing" />
          Marketing
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Sales" />
          Sales
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Engineering" />
          Engineering
        </label>
      </div>

      <v-tabs
        background-color="white"
        color="primary"
        centered
        center-active
        class="pt-5"
      >
        <v-tab>
          <input type="radio" v-model="selectedCategory" value="All" /> All
        </v-tab>
        <v-tab v-model="selectedCategory" value="Marketing">
          <label>
            <input type="radio" v-model="selectedCategory" value="Marketing" />
            Marketing
          </label>
        </v-tab>
        <v-tab v-model="selectedCategory" value="Sales">Sales</v-tab>
        <v-tab value="Engineering">
          Engineering
        </v-tab>

        <v-tab-item v-for="(tab, id) in 4" :key="id">
          <v-row>
            <job-card
              v-for="job in filteredCategory"
              :key="job.category"
              :position="job.position"
              :category="job.category"
            />
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle";
import JobCard from "../JobCard";
export default {
  position: "JobSection",
  components: { JobCard, SectionTitle },
  data() {
    return {
      selectedCategory: "All",
      category: null,
      jobs: [
        {
          position: "Bill Gates",
          location: "Shibuya, Tokyo, Japan",
          category: "Engineering"
        },
        {
          position: "Bill Gates",
          location: "Shibuya, Tokyo, Japan",
          category: "Marketing"
        },
        {
          position: "Bill Gates",
          location: "Shibuya, Tokyo, Japan",
          category: "Sales"
        },
        {
          position: "Bill Gates",
          location: "Shibuya, Tokyo, Japan",
          category: "Engineering"
        }
      ]
    };
  },
  computed: {
    filteredCategory: function() {
      const category = this.selectedCategory;

      if (category === "All") {
        return this.jobs;
      } else {
        return this.jobs.filter(function(jobs) {
          return jobs.category === category;
        });
      }
    }
  }
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles'
.v-slide-group__prev,
.v-slide-group__prev--disabled
  display: none !important
</style>
