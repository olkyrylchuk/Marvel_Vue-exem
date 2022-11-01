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
      <div>
        <h1>{{ text.authore }}</h1>
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
.swiper {
  margin-top: 170px;
  height: 400px;
  margin-left: 100px;
  margin-right: 100px;
}

.slider {
  background-color: blue;
  border-radius: 20px;
  height: 400px;
  min-width: 200px;
}
</style>