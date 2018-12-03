<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
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
        console.log(name, vm)
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  .tabs-head {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: $tabs-height;
    > .actions-wrapper {
      margin-left: auto;
    }
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid red;
      width: 100px;
    }
  }
</style>