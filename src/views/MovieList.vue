<template>
  <div class="container mv-container">
    <div class="mt-4">
      <SearchForm />
    </div>
    <div class="mt-5">
      <h4 class="mb-3">Browse movies by category</h4>
      <MovieTabs />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import MovieTabs from "@/components/MovieTabs";

export default {
  components: {
    SearchForm,
    MovieTabs,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
.mv-container {
  font-family: "Inter", sans-serif;
}
</style>
