<template>
  <v-container id="customer">
    <section-title>cloud crew 事例</section-title>
    <h4 class="text-center font-weight-regular mb-5">
      インターン終了後、その学生を中心とした開発チームをカンボジアに設置している企業もあります。
    </h4>
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
            :img-src="customer.image"
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
const SectionTitle = () => import("@/components/SectionTitle.vue");
const CardTypeThree = () => import("@/components/CardTypeThree.vue");
export default {
  name: "CustomerSection",
  components: { SectionTitle, CardTypeThree },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 40,
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
            slidesPerView: 2.2,
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
          image: "images/cloud_crew/man.png",
          name: "事例１",
          position: "",
          words:
            "リモートの学生インターンプロジェクトとしてウェブデザインのテストツール開発を行いました（2名*6ヶ月）。卒業後は彼ら自身がオフィス探しやリモートでの開発環境作り、セキュリティカメラの導入を行い、現在では業務委託契約で4名がカンボジア拠点で開発プロジェクトを進めています。"
        },
        {
          image: "images/cloud_crew/woman.png",
          name: "事例２",
          position: "",
          words:
            "カンボジアで事業をしており、その国出身の優秀なエンジニアの確保ができました。8ヶ月間の在学中のインターン期間も経て会社の理念に共感しているのに加え、主要プロダクトの新機能開発やローカライゼーションのマネジメントを任せられる人材と仕事ができ、事業が拡大しています。"
        },
        {
          image: "images/cloud_crew/man.png",
          name: "事例３",
          position: "",
          words:
            "日本の建設現場にイノベーションを起こすべく、学生インターンチームでの開発から始めました。その中で優秀な学生を1名社員として雇用し、その後彼をリーダーとして学生インターンチームを増やし、現在では3つの異なる実験プロジェクトを走らせています。現地での強力な育成・管理体制があるので安心です。"
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
  background-image: url("../../assets/icons/arrow-left.png") !important
  left: -40px !important
.swiper-button-next
  background-image: url("../../assets/icons/arrow-right.png") !important
  right: -40px !important
.swiper-button-prev, .swiper-button-next
  top: 45% !important
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active
  color: #fff
  background: #74BEC2
</style>
