<template>
  <div class="tabs-head">
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
        this.$refs.line.style.width = width + 'px'
        this.$refs.line.style.left = left + 'px'
      })
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "var";*/
  $tabs-height: 40px;
  $color: rgb(24, 144, 255);
  .tabs-head {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: $tabs-height;
    > .actions-wrapper {
      margin-left: auto;
      margin-right: 1em;
    }
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $color;
      width: 100px;
      transition: all 300ms;
    }
  }
</style>