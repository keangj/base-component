<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss" scoped>
.b-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .b-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>