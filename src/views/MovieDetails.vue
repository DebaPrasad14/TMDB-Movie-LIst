<template>
  <div>
    <Navbar />
    <div class="container overflow-auto">
      <PageLayout :pageStatus="pageStatus">
        <div v-if="movieData">
          <div class="mv-large-icon">
            <b-img
              :src="
                movieData.poster_path
                  ? `//image.tmdb.org/t/p/w220_and_h330_face/${movieData.poster_path}`
                  : require('@/assets/noimage.jpeg')
              "
            />
          </div>
          <div class="mv-overlay w-100">
            <div class="d-flex justify-content-between mx-3 w-100">
              <div>
                <h5>
                  <b>{{ movieData.title }}</b>
                </h5>
                <p class="font-13">
                  <span>{{ formatDate(movieData.release_date) }} (IN) |</span>
                  <span
                    v-for="(genre, idx) in movieData.genres"
                    :key="genre.id"
                  >
                    <span class="ml-1">{{ genre.name }}</span>
                    <span v-if="idx < movieData.genres.length - 1">,</span>
                  </span>
                  <span> | {{ formatDuration(movieData.runtime) }}</span>
                </p>
              </div>
              <div class="mv-user-rate">
                <p class="pt-2 mr-2">
                  <b>User Score</b>
                </p>
                <div>
                  <b-avatar
                    variant="mv-score"
                    :text="`${getUserScore(movieData)}%`"
                  ></b-avatar>
                </div>
              </div>
            </div>
          </div>

          <b-row class="mt-4 font-14">
            <b-col sm="8">
              <div>
                <p><b>Overview</b></p>
                <p>{{ movieData.overview }}</p>
              </div>
              <div>
                <p><b>Production Companies</b></p>
                <div class="d-flex">
                  <div
                    v-for="company in movieData.production_companies"
                    :key="company.id"
                    class="text-center"
                  >
                    <b-avatar
                      variant="primary"
                      :text="getAvatarText(company.name)"
                    ></b-avatar>
                    <p class="pt-3 pl-2">{{ company.name }}</p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col sm="4">
              <div class="line-height-4">
                <p><b>Status</b></p>
                <p>{{ movieData.status }}</p>
              </div>
              <div class="line-height-4 pt-2">
                <p><b>Original Language</b></p>
                <p>{{ movieData.original_language }}</p>
              </div>
              <div class="line-height-4 pt-2">
                <p><b>Budget</b></p>
                <p>$ {{ movieData.budget }}</p>
              </div>
              <div class="line-height-4 pt-2">
                <p><b>Revenue</b></p>
                <p>$ {{ movieData.revenue }}</p>
              </div>
            </b-col>
          </b-row>
        </div>
      </PageLayout>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Navbar from "@/components/navs/Navbar";
import PageLayout from "@/components/common/PageLayout";

export default {
  components: {
    Navbar,
    PageLayout,
  },
  data() {
    return {
      pageStatus: "",
      BASE_URL: process.env.VUE_APP_TMDB_URL,
      API_KEY: process.env.VUE_APP_API_KEY,
      movieData: null,
    };
  },
  created() {
    this.getMovieDetails();
  },
  computed: {
    movieId() {
      return this.$route.query.id;
    },
  },
  methods: {
    getMovieDetails() {
      this.pageStatus = "loading";
      axios
        .get(`${this.BASE_URL}/${this.movieId}?api_key=${this.API_KEY}`)
        .then((response) => {
          this.movieData = response.data;
          // eslint-disable-next-line
          console.log("data", this.movieData);

          this.pageStatus = Object.keys(this.movieData).length
            ? "success"
            : "empty";
        })
        .catch((e) => {
          this.pageStatus = "error";
          // eslint-disable-next-line
          console.log("Error in fetching data: ", e);
        });
    },
    formatDate(value) {
      return moment(value).format("MM/DD/YYYY");
    },
    formatDuration(value) {
      let hours = Math.floor(value / 60);
      let minutes = value % 60;
      return hours + "h " + minutes + "m";
    },
    getUserScore(data) {
      return data.vote_average * 10;
    },
    getAvatarText(text) {
      let arr = text.split(" ");
      if (arr.length < 2) {
        return arr[0].substring(0, 2);
      }
      return arr[0].charAt(0) + arr[1].charAt(0);
    },
  },
};
</script>

<style>
.mv-large-icon {
  height: 20em;
  width: 100%;
}
.mv-large-icon img {
  height: 100%;
  width: 100%;
  border-radius: 12px;
}
.badge-mv-score {
  background: #fff;
  color: #139810;
  font-size: 14px;
}
.mv-overlay {
  margin-top: -3.7em;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.font-15 {
  font-size: 15px;
}
.font-14 {
  font-size: 14px;
}
.font-13 {
  font-size: 13px;
}
.mv-user-rate {
  display: flex;
}
.line-height-4 {
  line-height: 4px;
}
</style>
