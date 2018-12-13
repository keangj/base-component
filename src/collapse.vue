<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'b-collapse'
  }
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>