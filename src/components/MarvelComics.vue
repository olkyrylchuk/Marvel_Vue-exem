<template>
  <div class="comics" id="comics">
    <h2 class="comics__title">comics</h2>
    <div class="container">
      <button v-on:click="results">click</button>
      <div class="results">
        <div class="item" v-for="item in result" :key="item.result">
          <h1>{{ item.title }}</h1>
          <h3>{{ item.id }}</h3>
        </div>
        <MarvelSlider />
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import MarvelSlider from "@/components/MarvelSlider.vue";

export default {
  components: {
    MarvelSlider,
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
.comics {
  margin-top: 100px;
  height: 100vh;
  max-width: 1170px;

  .container {
    z-index: 5;
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/marvel_homepage_bg.jpg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  h2 {
    font-family: "Staatliches", cursive;
    letter-spacing: 7px;
    color: red;
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
}
</style>