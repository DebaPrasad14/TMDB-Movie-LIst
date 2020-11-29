<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="mv-nav-brand" :to="{ name: 'new-release' }"
        >Cinibuzz</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mv-nav-item ml-auto">
          <b-nav-item href="#">Movies</b-nav-item>
          <b-nav-item href="#">TV Shows</b-nav-item>
          <b-nav-item href="#">Kids</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700&display=swap");
.mv-nav-brand,
.mv-nav-brand:focus,
.mv-nav-brand:hover,
.mv-nav-brand:active {
  font-family: "Baloo Bhai 2", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 57px;
  color: #6855d6 !important;
}
</style>
