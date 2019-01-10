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
        type: Array
      },
      accordion: {
        type: Boolean,
        default: false
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
      this.eventBus.$emit('update:selected', this.selected)

      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.accordion) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })

      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        selectedCopy =  selectedCopy.filter(item => item !== name)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>