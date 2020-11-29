<template>
  <div class="container mv-container">
    <div class="mt-4">
      <SearchForm />
    </div>
    <div class="mt-5">
      <h4 class="mb-4">
        Showing results for <b>{{ searchedKeyword }}</b>
      </h4>
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
  </div>
</template>

<script>
import axios from "axios";
import SearchForm from "@/components/SearchForm";
import MovieItemCard from "@/components/MovieItemCard";
import PageLayout from "@/components/common/PageLayout";

export default {
  components: {
    SearchForm,
    MovieItemCard,
    PageLayout,
  },
  data() {
    return {
      pageStatus: "loading",
      BASE_URL: "https://api.themoviedb.org/3",
      API_KEY: process.env.VUE_APP_API_KEY,
      movieList: [],
    };
  },
  created() {
    this.searchMovies(this.searchedKeyword);
  },
  watch: {
    searchedKeyword(newVal) {
      this.searchMovies(newVal);
    },
  },
  computed: {
    searchedKeyword() {
      return this.$route.params.keyword;
    },
  },
  methods: {
    searchMovies(searchText) {
      this.pageStatus = "loading";
      axios
        .get(
          `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${searchText}`
        )
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
