<template>
  <div class="comics__all">
    <h2 class="comics__all-title">all comics</h2>
    <div class="container">
      <MarvelPopup
        v-if="isPopupVisible"
        @closePopup="closeInfoPopup"
        content="<h3>{{ comic.title }}</h3>"
      />

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
      <div class="comics-wrapper">
        <div class="paginate">
          <vue-awesome-paginate
            :total-items="totalResults"
            v-model="page"
            :items-per-page="20"
            :max-pages-shown="5"
            :on-click="changePageHandler"
          />
        </div>
        <div class="comics__all-results">
          <div
            class="comics__all-results-item"
            @click="showPopupInfo"
            v-for="comic in comics"
            :key="comic.comics"
          >
            <div class="title__wrapper">
              <h2><b>FORMAT:</b> {{ comic.format }}</h2>
              <h3>{{ comic.title }}</h3>
              <h1><b>ID:</b> {{ comic.id }}</h1>
              <h5><b>number of pages </b> {{ comic.pageCount }}</h5>
              <!-- <p>{{ comic.description }}</p> -->
            </div>
            <img
              v-bind:src="
                comic.thumbnail.path + '.' + comic.thumbnail.extension
              "
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <MarvelPopup /> -->
  </div>
</template>
  <script>
import axios from "axios";
import MarvelPopup from "@/views/MarvelPopup.vue";

export default {
  name: "СomicsList",
  props: ["content"],
  components: {
    MarvelPopup,
  },
  data() {
    return {
      comics: null,
      error: [],
      totalResults: 0,
      page: 1,
      offset: 0,
      limit: 20,
      apiUrl: "https://gateway.marvel.com/v1/public/comics?",
      params: {
        ts: "1",
        apikey: "3b2936364f8bbf97fc5f94fd4140fd14",
        hash: "5a96ed10a2f41594b6666404d14ca940",
      },
      isPopupVisible: false,
    };
  },
  methods: {
    showPopupInfo() {
      this.isPopupVisible = true;
    },
    closeInfoPopup() {
      this.isPopupVisible = false;
    },
    comicList() {
      axios
        .get(this.apiUrl, { params: this.params })
        .then((response) => {
          (this.comics = response.data.data.results),
            (this.totalResults = response.data.data.total),
            (this.limit = response.data.data.limit);
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
</script>
  <style>
p {
  color: aliceblue;
}
@import "../../public/src/css/MarvelComicsAll.min.css";
</style>