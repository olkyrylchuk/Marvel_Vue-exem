<template>
  <div class="comics">
    <h2 class="comics__title">comics</h2>
    <div class="comics__wrapper"></div>
    <div class="container">
      <div class="comics__navigation">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/comics">Comics</router-link>
          </li>
          <li>
            <router-link to="/characters">Characters</router-link>
          </li>
          <li>
            <router-link to="/movie">Movie</router-link>
          </li>
        </ul>
      </div>
      <MarvelSlider />
      <div class="btn__wrap">
        <!-- <button class="btn" v-on:click="results">click</button> -->
        <router-link to="/comicsAll"
          ><button class="btn">More Comics</button>
        </router-link>
      </div>
      <div class="results">
        <div class="item" v-for="item in result" :key="item.result">
          <h1>{{ item.title }}</h1>
          <h3>{{ item.id }}</h3>
          <img v-bind:src="item.thumbnail.path + '.jpg'" v-bind:alt="poster" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import MarvelSlider from "@/views/MarvelSlider.vue";

export default {
  name: "MarvelComics",
  components: {
    MarvelSlider,
  },
  props: {
    title: String,
    id: Number,
  },
  data() {
    return {
      result: [],
      error: [],
      apiUrl: "https://gateway.marvel.com/v1/public/comics?",
      params: {
        ts: "1",
        apikey: "3b2936364f8bbf97fc5f94fd4140fd14",
        hash: "5a96ed10a2f41594b6666404d14ca940",
      },
    };
  },
  methods: {
    results() {
      axios
        .get(this.apiUrl, { params: this.params })
        .then((response) => {
          (this.result = response.data.data.results),
            (this.totalResults = response.data.data.total),
            (this.limit = response.data.data.limit);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
};
</script >
  
  <style scoped  lang="scss">
@import "../../public/src/css/MarvelComics.min.css";
</style>