<template>
  <div class="comics__all">
    <h2 class="comics__all-title">all comics</h2>
    <div class="paginate">
      <vue-awesome-paginate
        :total-items="totalResults"
        v-model="page"
        :items-per-page="20"
        :max-pages-shown="5"
        :on-click="changePageHandler"
      />
    </div>
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
          <h2>{{ item.pageCount }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <img
          v-bind:src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
        />
      </div>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";

export default {
  name: "MarvelComics",

  components: {},
  props: {
    title: String,
    id: Number,
  },
  data() {
    return {
      result: [],
      error: [],
      comics: null,
      totalResults: 0,
      page: 1,
      offset: 0,
      limit: 20,
      apiUrl: "https://gateway.marvel.com/v1/public/comics?",
      params: {
        ts: "1",
        apikey: "eed65e480c39f84b69b4fea7a90a601f",
        hash: "b1c96125b5011981d21c7d12c91f322a",
      },
    };
  },
  methods: {
    results() {
      axios
        .get(this.apiUrl, { params: this.params })
        .then((response) => {
          this.result = response.data.data.results;
          (this.totalResults = response.data.data.results),
            (this.limit = response.data.data.results);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    changePageHandler(page) {
      this.page = page;
      this.params.offset = (page - 1) * this.limit;
      this.comicList();
    },
  },
  mounted() {
    this.comicList();
  },
};
</script >
    
    <style scoped  lang="scss">
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
.paginate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 45px;
}
.comic-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
}
.comic-item img {
  width: 100%;
  height: auto;
}
.comic-item h3 {
  margin: 5px;
  font-size: 23px;
}
.comic-item h1 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100px;
  margin: 5px;
  font-size: 26px;
}
.comic-item p {
  text-align: justify;
  height: 50px;
  overflow: auto;
}
@import "../../public/src/css/MarvelComicsAll.min.css";
</style>