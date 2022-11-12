<template>
  <div class="comics__all">
    <h2 class="comics__all-title">all comics</h2>
    <div class="home__navigation">
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
    <div class="btn__wrap">
      {{ results() }}
      <!-- <button class="btn" v-on:click="results">click</button> -->
    </div>
    <div class="comics__all-results">
      <div
        class="comics__all-results-item"
        v-for="item in result"
        :key="item.result"
      >
        <div class="title__wrapper">
          <h2><b>format: </b> {{ item.format }}</h2>
          <h1>{{ item.title }}</h1>
          <h3>{{ item.id }}</h3>
        </div>
        <img v-bind:src="item.thumbnail.path + '.jpg'" v-bind:alt="poster" />
      </div>
    </div>
    <MarvelPaginate />
  </div>
</template>
  
  <script>
import axios from "axios";
// import MarvelPaginate from "../components/MarvelPaginate.vue";

export default {
  name: "MarvelComics",

  components: {
    // MarvelPaginate,
  },
  props: {
    title: String,
    id: Number,
  },
  data() {
    return {
      result: [],
      error: [],
    };
  },
  methods: {
    results() {
      axios
        .get(
          "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=eed65e480c39f84b69b4fea7a90a601f&hash=b1c96125b5011981d21c7d12c91f322a"
        )
        .then((response) => {
          this.result = response.data.data.results;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
};
</script >
  
  <style scoped  lang="scss">
@import "../../public/src/css/MarvelComicsAll.min.css";
</style>