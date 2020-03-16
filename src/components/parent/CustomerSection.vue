<template>
  <v-container class="l_card_product">
    <section-title>お客様の声</section-title>
    <div style="position: relative; display: flex;">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(customer, id) in customers"
          :key="id"
          class="d-flex"
        >
          <card-type-three
            :title="customer.name"
            :subtitle="customer.position"
            :description="customer.words"
          />
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </v-container>
</template>

<script>
import CardTypeThree from "../CardTypeThree";
import SectionTitle from "../SectionTitle";
export default {
  name: "CustomerSection",
  components: { SectionTitle, CardTypeThree },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 15,
        freeMode: true,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        dynamicBullets: true,
        breakpoints: {
          1124: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      customers: [
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "業者を選ぶポイントは技術力もあるけど、顧客のために全力でサポートしたいという社員の気持ちがひとつになっていることが重要です。 トラムシステムさんの良さは、まさにそこにあると感じました。"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "業者を選ぶポイントは技術力もあるけど、顧客のために全力でサポートしたいという社員の気持ちがひとつになっていることが重要です。 トラムシステムさんの良さは、まさにそこにあると感じました。"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "業者を選ぶポイントは技術力もあるけど、顧客のために全力でサポートしたいという社員の気持ちがひとつになっていることが重要です。 トラムシステムさんの良さは、まさにそこにあると感じました。"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "工科大学との連携、現地オフショア企業との連携、日本におけるエンジニアパートナーのネットワーク、アフターサポート"
        },
        {
          name: "鎌倉",
          position: "投信株式会社 様",
          words:
            "業者を選ぶポイントは技術力もあるけど、顧客のために全力でサポートしたいという社員の気持ちがひとつになっていることが重要です。 トラムシステムさんの良さは、まさにそこにあると感じました。"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.swiper
  padding-bottom: 45px
  display: flex
.swiper-button-prev
  width: 25px !important
  left: -40px !important
.swiper-button-next
  /*background-image: url("../../assets/images/why_us.png") !important*/
  right: -40px !important
.swiper-button-prev, .swiper-button-next
  top: 45% !important
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active
  color: #fff
  background: #138690
</style>
