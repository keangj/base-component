<template>
  <svg class="b-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  .b-icon {
    width: 1em;
    height: 1em;
  }
</style>