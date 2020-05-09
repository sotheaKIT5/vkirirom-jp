<template>
  <div>
    <div>
      <div style="position: relative">
        <parallax :speed-factor="0.2" direction="down" :parallax="true">
          <img :src="featured_image" />
        </parallax>
      </div>
    </div>
    <v-container class="post">
      <section-title>{{ post_title }}</section-title>
      <div v-html="post_content"></div>
      <div>
        <div class="date d-flex justify-end align-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 13 13"
            fill="#9C9C9C"
            style="margin-right: 6px; display: flex; align-items: center"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.875 8.125H3.25V6.5H4.875V8.125ZM7.3125 6.5H5.6875V8.125H7.3125V6.5ZM9.75 6.5H8.125V8.125H9.75V6.5ZM4.875 4.0625H3.25V5.6875H4.875V4.0625ZM7.3125 4.0625H5.6875V5.6875H7.3125V4.0625ZM9.75 4.0625H8.125V5.6875H9.75V4.0625ZM4.875 8.9375H3.25V10.5625H4.875V8.9375ZM7.3125 8.9375H5.6875V10.5625H7.3125V8.9375ZM9.75 8.9375H8.125V10.5625H9.75V8.9375ZM13 1.625V3.25V11.375C13 12.2688 12.2688 13 11.375 13H1.625C0.73125 13 0 12.2688 0 11.375V3.25V1.625C0 0.73125 0.73125 0 1.625 0H11.375C12.2688 0 13 0.73125 13 1.625ZM12.1875 3.25H0.8125V11.375C0.8125 11.8625 1.1375 12.1875 1.625 12.1875H11.375C11.8625 12.1875 12.1875 11.8625 12.1875 11.375V3.25Z"
            />
          </svg>
          <span
            v-if="post_date != null"
            class="ma-0"
            v-html="getDate(post_date)"
          ></span>
        </div>
      </div>
      <v-divider />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Parallax from "vue-parallaxy";
import SectionTitle from "@/components/SectionTitle";

export default {
  name: "NewsPage",
  components: { SectionTitle, Parallax },
  data: function() {
    return {
      post_detail: [],
      featured_image: "",
      post_title: "",
      post_content: "",
      post_date: [],
      route: this.$router.currentRoute.params["id"]
    };
  },

  methods: {
    getPosts() {
      axios
        .get(
          "http://wp.a2a-digital.jp/wp-json/wp/v2/posts/" +
            this.$router.currentRoute.params["id"]
        )
        .then(response => {
          this.post_detail = response.data;
          this.featured_image = this.post_detail.better_featured_image.media_details.sizes.large.source_url;
          this.post_title = this.post_detail.title.rendered;
          this.post_content = this.post_detail.content.rendered;
          this.post_date = this.post_detail.date;
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getDate(datetime) {
      if (datetime != null)
        return new Date(datetime)
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, "/");
    }
  },
  mounted() {
    this.getPosts();
    this.getDate();
  }
};
</script>

<style src="@/styles/wp/block-directory/style.css"></style>
<style src="@/styles/wp/block-library/style.css"></style>
<style src="@/styles/wp/components/style.css"></style>
<style src="@/styles/wp/format-library/style.css"></style>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
figure
  text-align: center
figcaption
  color: #696969
  text-align: center
  font-weight: bold
  margin: 0
.Masthead
  z-index: 0 !important
  height: 200px !important
  min-height: 100px !important
.wp-block-image
  text-align: center
  pointer-events: none
.wp-block-gallery
  .blocks-gallery-grid
    padding: 0 !important
.date
  color: #9C9C9C
  svg
    fill: #9C9C9C
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .Masthead
    height: 450px !important
    min-height: 450px !important
  .Masthead__image
    height: 600px !important
</style>
