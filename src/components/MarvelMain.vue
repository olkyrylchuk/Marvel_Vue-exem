<template>
  <span class="red__column">
    <img src="../assets/img/down-arrow.svg" alt="" />
  </span>
  <div class="main">
    <MarvelHero />
    <MarvelHomePage />
    <MarvelComics />
    <MarvelFooter />
  </div>
</template>

<script>
import MarvelHero from "../views/MarvelHero.vue";
import MarvelHomePage from "../views/MarvelHomePage.vue";
import MarvelComics from "../components/MarvelComics.vue";
import MarvelFooter from "../components/MarvelFooter.vue";

export default {
  name: "MarvelMain",
  components: {
    MarvelHero,
    MarvelHomePage,
    MarvelComics,
    MarvelFooter,
  },
  data() {
    return {};
  },
};
</script
>

<style lang="scss">
body {
  z-index: 5;
  position: relative;
  background-color: #000;
}

.red__column {
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100px;
  background-color: rgb(233, 41, 41);
  box-shadow: 0px -15px 50px rgb(201, 30, 30);
  right: 17%;

  img {
    position: sticky;
    margin-top: 70vh;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 17px;
  }
}
@import "../../public/src/css/AppVue.min.css";
</style>
