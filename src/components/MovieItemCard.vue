<template>
  <div>
    <div class="mv-poster" @click="goToMovieDetailsPage()">
      <template v-if="movieDetails.poster_path">
        <b-img
          :src="
            `//image.tmdb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`
          "
          alt="poster"
        />
      </template>
      <template v-else>
        <b-img :src="require('@/assets/noimage.jpeg')" alt="no image" />
      </template>
    </div>
    <div class="mv-poster-text mt-3">
      <div>
        <b>{{ movieDetails.title }}</b>
      </div>
      <p>
        <small>{{ movieDetails.release_date | formatInMMMDDYYYY }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieDetails: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToMovieDetailsPage() {
      this.$router.push({
        name: "movie-details",
        query: {
          name: this.movieDetails.title,
          id: this.movieDetails.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.mv-poster {
  width: 160px;
  height: 220px;
}
.mv-poster img {
  height: 100%;
  width: 100%;
  border-radius: 12px;
}
.mv-poster-text {
  font-size: 13px;
  line-height: 15px;
  width: 160px;
  word-break: break-all;
}
.mv-poster-text > p {
  line-height: 16px;
}
</style>
