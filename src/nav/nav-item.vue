<template>
  <div
    class="b-nav-item"
    :class="{selected, vertical}"
    @click="onClick"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    inject: ['root', 'vertical'],
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
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
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
    &:hover {
      color: $blue;
    }
    &:not(.vertical) {
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
    &.vertical {
      &.selected {
        color: $blue;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .b-sub-nav .b-nav-item:not(.vertical) {
    &.selected {
      color: $blue;
      background-color: $gray;
      &::after {
        display: none;
      }
    }
  }
</style>