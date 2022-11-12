<template>
  <div class="container">
    <!-- <div class="home__navigation">
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
    </div> -->
    <router-view />
  </div>
</template>

<script>
// import MarvelMain from "./components/MarvelMain.vue";

export default {
  name: "App",
  components: {
    // MarvelMain,
  },
  data() {
    return {};
  },
};
</script
>

<style scoped lang="scss">
@import url(../src/assets/reset.css);
</style>
