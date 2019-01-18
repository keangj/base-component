<template>
  <div class="b-sub-nav">
    <span
      class="b-sub-nav-label"
      @click="onClick"
    >
      <slot name="title"></slot>
    </span>
    <div
      class="b-sub-nav-popover"
      v-show="open"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubNav',
    data () {
      return {
        open: false
      }
    },
    methods: {
      onClick () {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../var";
  .b-sub-nav {
    position: relative;
    &-label {
      display: block;
      padding: 10px 20px;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      min-width: 6em;
      background-color: #fff;
      box-shadow: 0 0 3px $box-shadow-color2;
      font-size: $font-size;
      color: $font-color;
    }
  }
  .b-sub-nav .b-sub-nav .b-sub-nav-popover {
    position: absolute;
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>