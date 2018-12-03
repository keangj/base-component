<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "b-tabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validate() {
          return ['horizontal', 'vertical'].indexOf(value) !== -1
        }
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
      // 拿到 item 实例，并传递出去
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'b-tabs-head') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'b-tabs-item' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>