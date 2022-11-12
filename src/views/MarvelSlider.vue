<template>
  <swiper
    class="swiper"
    :slides-per-view="3"
    :modules="modules"
    :space-between="70"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <swiper-slide
      class="slider"
      v-for="text in swiperTextBase"
      :key="text.description"
    >
      <div class="swiper-items">
        <h1>{{ text.author }}</h1>
        <h2>{{ msg }}</h2>
        <p>{{ text.description }}</p>
        <img :src="text.img" alt="image" />
      </div>
    </swiper-slide>
  </swiper>
</template>

  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  name: "SwiperComponent",
  props: {
    mgs: String,
  },
  components: { Swiper, SwiperSlide },
  setup() {
    const swiperTextBase = ref([
      {
        author: "Elon Must",
        description: "When we meet",
        img: "",
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: "",
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: "",
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: "",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>

<style>
@import "../../public/src/css/MarvelSlider.min.css";
</style>