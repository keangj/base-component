<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-head-item",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String|Number,
        required: true
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>