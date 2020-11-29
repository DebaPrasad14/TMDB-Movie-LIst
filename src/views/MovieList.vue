<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="mt-0">
        <SearchForm />
      </div>
      <div class="mt-5">
        <h4 class="mb-3">Browse movies by category</h4>
        <MovieTabs />
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import MovieTabs from "@/components/MovieTabs";
import Navbar from "@/components/navs/Navbar";

export default {
  components: {
    SearchForm,
    MovieTabs,
    Navbar,
  },
};
</script>
