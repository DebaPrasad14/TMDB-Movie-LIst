<template>
  <div class="mv-tab-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabContainer",
};
</script>

<style>
.mv-tab-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.mv-tab-item-anchor,
.mv-tab-item-anchor:hover {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
}
.mv-tab-item-anchor.mv-tab-active {
  color: #333;
  font-weight: 600;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
}
.mv-tab-body {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.mv-tab-body .mv-tab-content {
  position: relative;
  height: 100%;
  overflow-y: auto;
}
</style>
