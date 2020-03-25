<template>
  <div class="read-more">
    <v-card
      flat
      tile
      color="transparent"
      class="from-left"
      :ripple="false"
      @click="$vuetify.goTo(scrollTo, options)"
      :to="cardUrl"
    >
      <span class="primary--text mr-3">{{ btnTxt }}</span>
      <svg
        viewBox="0 0 512 512"
        style="vertical-align: middle;"
        width="20px"
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
  </div>
</template>

<script>
export default {
  name: "ReadMore",
  data() {
    return {
      duration: 1000,
      offset: 0
    };
  },
  props: {
    btnTxt: {
      type: String,
      default: "btnTxt"
    },
    cardUrl: {
      type: String,
      default: "btnTxt"
    },
    scrollTo: {
      type: String,
      default: "#management"
    }
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset
      };
    }
  }
};
</script>

<style scoped>
.read-more img {
  color: #138690;
  margin-left: 15px;
}

a {
  display: inline-block;
  text-decoration: none;
}

a:after {
  display: block;
  content: "";
  border-bottom: 2px solid #138690;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

a:hover:after {
  transform: scaleX(1.01);
}

a.fromRight:after {
  transform-origin: 100% 50%;
}

a.from-left:after {
  transform-origin: 0 50%;
}
@media (min-width: 768px) {
  #read-more img {
    margin-left: 35px;
  }
}
</style>
