<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-head"
  }
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  .tabs-head {
    display: flex;
    height: $tabs-height;
    align-items: center;
    justify-content: flex-start;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>