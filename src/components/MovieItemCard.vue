<template>
  <div>
    <div class="mv-poster">
      <template v-if="posterSrc">
        <b-img
          :src="`//image.tmdb.org/t/p/w220_and_h330_face/${posterSrc}`"
          alt="poster"
        />
      </template>
      <template v-else>
        <b-img :src="require('@/assets/noimage.jpeg')" alt="no image" />
      </template>
    </div>
    <div class="mv-poster-text mt-3">
      <div>
        <b>{{ movieTitle }}</b>
      </div>
      <p>
        <small>{{ movieReleaseDate | formatInMMMDDYYYY }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posterSrc: {
      required: true,
    },
    movieTitle: {
      type: String,
      required: true,
    },
    movieReleaseDate: {
      type: String,
      required: true,
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
