<template>
  <div class="home">
    <h2 class="home__title">Home Page</h2>
    <div class="container">
      <div class="home__navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#comics">Comics</a>
          </li>
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Movie</a>
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
.home {
  position: relative;
  margin-top: 100px;
  height: 100vh;
  width: 100%;

  &__navigation {
    position: absolute;
    overflow: hidden;
    position: sticky;
    top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 45px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);

    ul {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      li {
        padding: 1px 4px;
        background-color: red;

        a {
          color: #fff;
          font-weight: 800;
          text-transform: uppercase;
        }
      }
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .home__logo-img {
      width: 150px;
      height: auto;
      margin-top: 23%;
    }
    h1 {
      font-family: "Staatliches", cursive;
      color: #fff;
      text-transform: uppercase;
      font-size: 6rem;
      letter-spacing: 8px;
      text-shadow: 0px 3px 12px rgba(222, 79, 79, 1);
    }

    h3 {
      font-family: "Staatliches", cursive;
      color: #fff;
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: 200;
      text-transform: uppercase;
      text-shadow: 0px 3px 12px rgba(222, 79, 79, 1);
    }
  }
}
.container {
  padding-top: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/marvel_homepage_bg.jpg);
  background-size: contain;
  background-repeat: no-repeat;
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