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
import axios from "axios";
import GenericMixin from "./../mixins/GenericMixin";

export default {
  mixins: [GenericMixin],
  methods: {
    getLatestMovies() {
      this.pageStatus = "loading";
      axios
        .get(`${this.BASE_URL}/now_playing?api_key=${this.API_KEY}`)
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
