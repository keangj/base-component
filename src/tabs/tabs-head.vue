<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-head",
    inject: ['eventBus'],
    mounted () {
      this.eventBus.$on('update:selected', (name, vm) => {
        let {width, left} = vm.$el.getBoundingClientRect()
        let {left: headLeft} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = width + 'px'
        this.$refs.line.style.left = `${left - headLeft}px`
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../var";

  .tabs-head {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: $tabs-height;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $color;
      transition: all 300ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>