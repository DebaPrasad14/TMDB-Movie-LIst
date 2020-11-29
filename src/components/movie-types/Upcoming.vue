<template>
  <div>
    <PageLayout :pageStatus="pageStatus">
      <div class="mv-page-select">
        <div v-for="movie in movieList" :key="movie.id">
          <MovieItemCard
            :posterSrc="movie.poster_path"
            :movieTitle="movie.title"
            :movieReleaseDate="movie.release_date"
          />
        </div>
      </div>
    </PageLayout>
  </div>
</template>

<script>
import MovieItemCard from "./../MovieItemCard";
import PageLayout from "./../common/PageLayout";
import axios from "axios";

export default {
  components: {
    MovieItemCard,
    PageLayout,
  },
  data() {
    return {
      pageStatus: "loading",
      BASE_URL: process.env.VUE_APP_TMDB_URL,
      API_KEY: process.env.VUE_APP_API_KEY,
      movieList: [],
    };
  },
  created() {
    this.getLatestMovies();
  },
  methods: {
    getLatestMovies() {
      this.pageStatus = "loading";
      axios
        .get(`${this.BASE_URL}/upcoming?api_key=${this.API_KEY}`)
        .then((response) => {
          this.movieList = response.data.results;
          this.pageStatus = this.movieList.length ? "success" : "empty";
        })
        .catch((e) => {
          this.pageStatus = "error";
          // eslint-disable-next-line
          console.log("Error in fetching data: ", e);
        });
    },
  },
};
</script>
