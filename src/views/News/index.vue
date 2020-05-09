<template>
  <div>
    <section-title>ニュース</section-title>
    <v-container v-if="loading">
      <div class="d-flex justify-center">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-container>
    <v-container v-else-if="!loading">
      <v-row>
        <news-card
          v-for="(post, id) in posts"
          :key="id"
          :image="
            post.better_featured_image.media_details.sizes.medium.source_url
          "
          :date="post.date"
          :title="post.title.rendered"
          :description="briefDesc(post.excerpt.rendered)"
          :go-to-news="post.id"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="red"
              ></v-progress-circular>
            </v-row>
          </template>
        </news-card>
      </v-row>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="postsData.page"
                  class="my-4"
                  :length="allPages"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NewsCard from "@/components/NewsCard";
import SectionTitle from "../../components/SectionTitle";

export default {
  name: "NewsPage",
  components: { SectionTitle, NewsCard },
  data: function() {
    return {
      loading: true,
      postsUrl: "http://wp.a2a-digital.jp/wp-json/wp/v2/posts",
      posts: [],
      postsData: {
        per_page: 9,
        page: 1
      },
      allPages: null
    };
  },
  methods: {
    getPosts() {
      axios
        .get(
          this.postsUrl +
            "?per_page=" +
            this.postsData.per_page +
            "&page=" +
            this.postsData.page
        )
        .then(response => {
          this.posts = response.data;
          this.allPages = parseInt(response.headers["x-wp-totalpages"]);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    briefDesc(description) {
      if (description.length >= 75) {
        description = description.slice(3, 75) + "...";
        return description;
      } else {
        return description;
      }
    }
  },
  watch: {
    "postsData.page": {
      immediate: true,
      handler: "getPosts"
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style scoped></style>
