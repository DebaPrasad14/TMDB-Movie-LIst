<template>
  <b-nav-item
    class="mv-tab-item"
    link-classes="mv-tab-item-anchor"
    active-class="mv-tab-active"
    exact
    :to="{ path: routePath }"
  >
    <slot></slot>
  </b-nav-item>
</template>

<script>
export default {
  name: "TabNavItem",
  props: {
    routePath: {
      type: String,
      required: true,
    },
  },
};
</script>
