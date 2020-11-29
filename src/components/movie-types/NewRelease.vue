<template>
  <div>
    <template v-if="isLoading">
      <div class="mv-centered">
        <Loader />
      </div>
    </template>
    <template v-else-if="isError">
      <div class="d-flex justify-content-center">
        <PageError />
      </div>
    </template>
    <template v-else-if="movieList.length">
      <div class="ct-page-select">
        <!-- <MovieItemCard :posterSrc="" :movieTitle="" :movieReleaseDate=""/> -->
      </div>
    </template>
  </div>
</template>

<script>
// import MovieItemCard from "./../MovieItemCard";
import PageError from "@/components/common/PageError";
import Loader from "@/components/common/PageLoader";
import axios from "axios";

export default {
  components: {
    // MovieItemCard,
    PageError,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
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
      axios
        .get(`${this.BASE_URL}/latest?api_key=${this.API_KEY}`)
        .then((response) => {
          // this.movieList = response.data.data.coins.reduce((acc, el) => {
          //   let obj = {
          //     id: el.uuid,
          //     rank: el.rank,
          //     icon: el.iconUrl,
          //     name: el.name,
          //     symbol: el.symbol,
          //     price: parseFloat(el.price).toFixed(2),
          //     change: el.change,
          //   };
          //   return acc.concat(obj);
          // }, []);

          // eslint-disable-next-line
          console.log(response);
        })
        .catch((e) => {
          this.isError = true;
          // eslint-disable-next-line
          console.log("Error in fetching data: ", e);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
