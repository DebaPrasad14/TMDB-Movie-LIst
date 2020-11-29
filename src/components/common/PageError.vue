<template>
  <div class="ct-error d-flex align-items-center">
    <div class="icon-error">
      <b-img
        :src="`https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png`"
      />
    </div>
    <div class="text-error">
      <p class="ml-2">
        Unable to fetch movie details, Please try again later
      </p>
    </div>
  </div>
</template>

<style scoped>
.ct-error .icon-error {
  height: 40px;
  width: 40px;
  margin-bottom: 15px;
}
.ct-error .icon-error img {
  height: 100%;
  width: 100%;
}
</style>
