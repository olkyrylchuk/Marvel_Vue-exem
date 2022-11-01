<template>
  <span></span>
  <div class="container">
    <MarvelHero />
    <MarvelHomePage />
    <MarvelComics />
  </div>
</template>

<script>
import MarvelHero from "./components/MarvelHero.vue";
import MarvelHomePage from "./components/MarvelHomePage.vue";
import MarvelComics from "./components/MarvelComics.vue";

export default {
  name: "App",
  components: {
    MarvelHero,
    MarvelHomePage,
    MarvelComics,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url(../src/assets/reset.css);

html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  background-color: #000;
  span {
    position: absolute;
    height: 100%;
    width: 100px;
    background-color: rgb(233, 41, 41);
    box-shadow: 0px -15px 50px rgb(201, 30, 30);
    right: 17%;
  }
}

.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 17px;
}
</style>
