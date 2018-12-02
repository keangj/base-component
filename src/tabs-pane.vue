<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-head-pane",
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>