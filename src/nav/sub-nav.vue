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
  .b-sub-nav {
    position: relative;
    .b-sub-nav-label {
      display: block;
      padding: 10px 20px;
    }
    .b-sub-nav-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid yellow;
      background-color: #fff;
    }
  }
</style>