<template>
  <div>
    <template v-if="pageStatus == 'loading'">
      <div class="mv-centered">
        <PageLoader />
      </div>
    </template>
    <template v-else-if="pageStatus == 'error'">
      <div class="d-flex justify-content-center">
        <PageError />
      </div>
    </template>
    <template v-else-if="pageStatus == 'empty'">
      <div class="d-flex justify-content-center">
        <PageEmpty />
      </div>
    </template>
    <template v-else-if="pageStatus == 'success'">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import PageError from "@/components/common/PageError";
import PageLoader from "@/components/common/PageLoader";
import PageEmpty from "@/components/common/PageEmpty";

export default {
  props: {
    pageStatus: {
      type: String,
      default: "loading",
    },
  },
  components: {
    PageError,
    PageEmpty,
    PageLoader,
  },
};
</script>

<style>
.mv-page-select {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mv-page-select > div {
  margin-right: 15px;
  /* flex: 1; */
}
.mv-centered {
  display: flex;
  justify-content: center;
}
</style>
