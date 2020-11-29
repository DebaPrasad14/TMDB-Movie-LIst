<template>
  <div>
    <PageLayout :pageStatus="pageStatus">
      <div class="mv-page-select">
        <div v-for="movie in movieList" :key="movie.id">
          <MovieItemCard :movieDetails="movie" />
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
          let genId = this.getGenreForActionMovies("science fiction")[0];
          this.movieList = response.data.results.filter((item) => {
            if (item.genre_ids.includes(genId.id)) {
              return item;
            }
          });
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
