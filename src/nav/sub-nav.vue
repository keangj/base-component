<template>
  <div class="b-sub-nav" :class="{active}">
    <span
      class="b-sub-nav-label"
      @click="onClick"
    >
      <slot name="title"></slot>
      <span class="b-sub-nav-icon" :class="{open}">
        <b-icon name="right"></b-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
          class="b-sub-nav-popover"
          :class="{vertical}"
          v-show="open"
        >
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div
        class="b-sub-nav-popover"
        :class="{vertical}"
        v-show="open"
      >
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  import BIcon from '../icon'

  export default {
    name: 'SubNav',
    inject: ['root', 'vertical'],
    components: { 'b-icon': BIcon },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false
      }
    },
    computed: {
      active () {
        return this.root.namePath.indexOf(this.name) !== -1
      }
    },
    methods: {
      enter (el, done) {
        let { height } = el.getBoundingClientRect()
        el.style.height = 0
        el.getBoundingClientRect() // 触发属性变化
        el.style.height = `${height}px`
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterEnter (el) {
        el.style.height = 'auto'
      },
      leave (el, done) {
        let { height } = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect() // 触发属性变化
        el.style.height = 0
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterLeave (el) {
        el.style.height = 'auto'
      },
      onClick () {
        this.open = !this.open
      },
      updateNamePath () {
        this.root.namePath.unshift(this.name)
        this.$parent.updateNamePath && this.$parent.updateNamePath()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../var";
  .b-sub-nav {
    position: relative;
    background-color: #fff;
    &.active {
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
    &-icon {
      display: none;
    }
    &-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      border-radius: $border-radius;
      min-width: 8em;
      background-color: #fff;
      box-shadow: 0 0 3px $box-shadow-color2;
      font-size: $font-size;
      color: $font-color;
      transition: height 250ms;
      &.vertical {
        position: static;
        border-radius: 0;
        box-shadow: none;
        overflow: hidden;
      }
    }
  }
  .b-sub-nav .b-sub-nav {
    &.active {
      color: $blue;
      background-color: $gray;
      &::after {
        display: none;
      }
    }
    .b-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 4px;
      &.vertical {
        margin-left: 0;
      }
    }
    .b-sub-nav-icon {
      display: inline-flex;
      transition: transform 300ms;
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>