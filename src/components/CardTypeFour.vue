<template>
  <v-col cols="12" sm="4" md="3" class="pa-1 px-0 pa-sm-2">
    <v-card outlined class="card-type-four fill-height overflow-hidden">
      <div class="card-head px-7 py-5">
        <h1 class="card-name">
          {{ name }}
        </h1>
        <h4 class="card-text">
          {{ position }}
        </h4>
      </div>
      <v-img
        aspect-ratio="4:6"
        :src="imgSrc"
        :lazy-src="`https://i.picsum.photos/id/10/10/10.jpg`"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-card
        tile
        flat
        hover
        class="card-btn px-7 py-5 d-flex"
        :ripple="true"
        to="/"
      >
        <span class="primary--text">{{ btnTxt }}</span>
        <v-spacer />
        <svg
          viewBox="0 0 512 512"
          style="vertical-align: middle;"
          width="25px"
          height="20px"
        >
          <g>
            <path
              d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    "
              fill="#138690"
            />
          </g>
        </svg>
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CardTypeFour",
  props: {
    imgSrc: {
      type: String,
      default: require("@/assets/images/dummy/man-avatar.jpg")
    },
    name: {
      type: String,
      default: "name"
    },
    position: {
      type: String,
      default: "position"
    },
    btnTxt: {
      type: String,
      default: "btnTxt"
    },
    cardUrl: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="sass" scoped>
.card-type-four:hover .card-btn, .card-type-four:hover .card-btn>span, .card-type-four:hover .card-btn path
    background: #138690
    color: #FFFFFF !important
    fill: #FFFFFF
</style>
