<template>
  <div class="hero">
    <div class="hero__container"></div>
  </div>
</template>




<style scoped lang="scss">
.hero {
  height: 100vh;
  &__container {
    padding: 10px;
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-image: url(../assets/img/marvel_hero_bg.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>