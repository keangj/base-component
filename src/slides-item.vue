<template>
  <transition name="slide">
    <div class="b-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'b-slides-item',
    props: {
      name: String
    },
    data () {
      return {
        selected: undefined,
        reverse: false,
      }
    },
    computed: {
      visible () {
        return this.selected === this.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter {
    transform: translateX(100%);

  }
  .slide-enter.reverse {
    transform: translateX(-100%);
    border-color: #3a5169;
  }
  .slide-leave-to {
    transform: translateX(-100%);

  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
    border-color: #3a5169;
  }
</style>