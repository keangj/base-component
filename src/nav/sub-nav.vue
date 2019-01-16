<template>
  <div class="b-sub-nav">
    <span class="b-sub-nav-label">
      <slot name="title"></slot>
    </span>
    <div class="b-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubNav'
  }
</script>

<style lang="scss" scoped>
  .b-sub-nav {
    position: relative;

    .b-sub-nav-label {
      display: block;
      padding: 4px 8px;
    }
    .b-sub-nav-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid yellow;
      background-color: #fff;
    }
  }
</style>