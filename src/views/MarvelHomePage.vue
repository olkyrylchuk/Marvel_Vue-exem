<template>
  <div class="home">
    <h2 class="home__title">Home Page</h2>
    <div class="container">
      <div class="home__navigation">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/comicsAll">Comics</router-link>
          </li>
          <li>
            <router-link to="/characters">Characters</router-link>
          </li>
          <li>
            <router-link to="/movie">Movie</router-link>
          </li>
        </ul>
      </div>
      <div class="home__wrapper">
        <img
          class="home__logo-img"
          src="../assets/img/Marvel_Logo.svg"
          alt="logo marvel"
        />
        <h1>Marvel Univers</h1>
        <h3>sorry, earth is closed today</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script >

<style scoped lang="scss">
@import "../../public/src/css/MarvelHomePage.min.css";
</style>