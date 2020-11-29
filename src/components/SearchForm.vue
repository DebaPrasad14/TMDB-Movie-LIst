<template>
  <div>
    <b-card class="mv-card">
      <div class="text-center mb-4">
        <h3>Find perfect movie for <b>evening</b></h3>
      </div>
      <b-input-group class="mv-search-group">
        <b-input-group-prepend>
          <b-input-group-text>
            <b-icon icon="search" aria-hidden="true" font-scale="0.97"></b-icon>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input
          id="input-search-text"
          class="mv-search-form"
          v-model="searchItem"
          trim
          type="text"
          placeholder="Search movies"
          autocomplete="off"
          @keypress.enter="submit"
        ></b-form-input>
        <b-button class="mv-button ml-2" @click="submit">SEARCH</b-button>
      </b-input-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: "",
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: "search-results",
        params: { keyword: this.searchItem },
      });
    },
  },
};
</script>

<style scoped>
.mv-card {
  background: #f2f1f8;
  border-radius: 0.5em;
  padding: 3em;
  border: 1px solid #dbe1e9;
}
.mv-search-group .input-group-text {
  background: #fff;
  border: 1px solid #dbe1e9;
  border-right: none !important;
}
.mv-search-group .mv-search-form,
.mv-search-group .mv-search-form:focus {
  border: 1px solid #dbe1e9;
  border-left: none;
  border-radius: 0 0.25em 0.25em 0;
  outline: 0 !important;
  box-shadow: none !important;
}
.mv-button {
  background: rgba(104, 85, 214, 0.54);
  border: none;
  border-radius: 0.35em;
  padding: 0 2em;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}
.btn:active,
.btn:focus,
.btn:visited,
.btn:hover {
  background: rgba(104, 85, 214, 0.54) !important;
  outline: 0 !important;
  border: none;
  box-shadow: none !important;
}
</style>
