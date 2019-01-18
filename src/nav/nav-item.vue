<template>
  <div
    class="b-nav-item"
    :class="{selected}"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        selected: false
      }
    },
    created () {
      this.root.addItem(this)
    },
    methods: {
      onClick () {
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../var";
  .b-nav-item {
    position: relative;
    padding: 10px 20px;
    &.selected {
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  .b-sub-nav .b-nav-item {
    &.selected {
      color: $blue;
      background-color: $gray;
      &::after {
        display: none;
      }
    }
  }
</style>