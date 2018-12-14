<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'b-collapse',
    props: {
      selected: {
        type: String
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      console.log(this.selected)
      this.eventBus.$emit('update:selected', this.selected)
      // this.eventBus.$on('update:selected', (name) => {
      //   this.$emit('update:selected', name)
      // })
    }
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