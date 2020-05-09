<template>
  <v-col class="news-card" cols="12" sm="4">
    <v-card height="100%" outlined flat tile :to="'/news/' + goToNews">
      <v-img width="100%" aspect-ratio="1.9" :src="image" />
      <div class="pb-12 pa-2">
        <h2 class="title pb-3" v-html="title" />
        <p class="description" v-html="description" />
      </div>
      <v-card
        width="100%"
        class="pa-2 d-flex align-center bottom"
        outlined
        flat
        tile
      >
        <div class="date d-flex align-center">
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
          <span class="ma-0" v-html="getDate(date)"></span>
        </div>
        <v-spacer></v-spacer>
        <read-more :card-url="'/news/' + goToNews" />
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
import ReadMore from "./ReadMore";
export default {
  name: "NewsCard",
  components: { ReadMore },
  props: {
    image: {
      type: String,
      default:
        "https://sun-asterisk.com/wp-content/uploads/2020/03/%E3%80%90%E4%B8%8A%E9%87%8E%E3%81%AE%E6%9D%9C%E6%A7%98%E3%80%91%E6%A7%8B%E6%88%90%E5%9B%B3_0401%E8%AA%BF%E6%95%B4-1.png"
    },
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    },
    date: {
      type: String,
      default: null
    },
    goToNews: {
      type: Number,
      default: null
    }
  },
  methods: {
    getDate(datetime) {
      return new Date(datetime)
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
    }
  }
};
</script>

<style lang="sass" scoped>
.news-card
  .title
    font-size: 24px
  .description
    font-size: 16px
  .date
    color: #9C9C9C
  .bottom
    position: absolute
    bottom: 0
</style>
