<template>
  <div>
    <template v-if="animationEnabled">
      <transition name="slide">
        <div class="b-slides-item" v-if="visible" :class="{reverse}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="b-slides-item" v-if="visible" :class="{reverse}">
        <slot></slot>
      </div>
    </template>
  </div>
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
        animationEnabled: false
      }
    },
    updated() {
      this.animationEnabled = true
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
    transition: all .5s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter.reverse {
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
  }
</style>