<template>
  <div class="container mv-container">
    <div class="mt-4">
      <template v-if="isLoading">
        <div class="ct-centered">
          <Loader />
        </div>
      </template>
      <template v-else-if="isError">
        <div class="ct-centered">
          <PageError />
        </div>
      </template>
      <template v-else>
        <SearchForm />
      </template>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import PageError from "@/components/PageError";
import Loader from "@/components/Loader";
// import axios from "axios";

export default {
  components: {
    SearchForm,
    PageError,
    Loader,
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
.mv-container {
  font-family: "Inter", sans-serif;
}
</style>
