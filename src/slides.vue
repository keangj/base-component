<template>
  <div
    class="b-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="b-slides-window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span
        v-for="n in childrenLength"
        :class="{active: selectIndex === n-1}"
        @click="select(n-1)"
      >
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-slides',
    props: {
      selected: String,
      autoPlay: Boolean
    },
    data () {
      return {
        childrenLength: 0,
        lastSelectIndex: 0,
        timerId: undefined
      }
    },
    computed: {
      names () {
        return this.$children.map(child => child.name)
      },
      selectIndex () {
        return this.names.indexOf(this.selected) || 0
      }
    },
    mounted () {
      this.updateSelected()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated () {
      this.updateSelected()
    },
    methods: {
      pause () {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      onMouseEnter () {
        this.pause()
      },
      onMouseLeave () {
        this.playAutomatically()
      },
      playAutomatically () {
        if (this.timerId) { return }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          if (newIndex === -1) { newIndex = this.names.length + 1}
          if (newIndex === this.names.length) { newIndex = 0 }
          this.select(newIndex)
          this.timerId = setTimeout(run, 3000)
        }
        this.timerId = setTimeout(run, 3000)
      },
      getSelected () {
        return this.selected || this.$children[0].name
      },
      updateSelected () {
        let selected = this.getSelected()
        this.$children.forEach(child => {
          let reverse = this.selectIndex <= this.lastSelectIndex
          if (this.timerId) {
            if (this.lastSelectIndex === this.$children.length - 1 && this.selectIndex === 0) {
              reverse = false
            }
            if (this.lastSelectIndex === 0 && this.selectIndex === this.$children.length - 1) {
              reverse = true
            }
          }
          child.reverse = reverse
          this.$nextTick(() => {
            child.selected = selected
          })
        })
      },
      select (index) {
        this.lastSelectIndex = this.selectIndex
        this.$emit('update:selected', this.names[index])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-slides {
    &-window {
      overflow: hidden;
    }
    &-wrapper {
      position: relative;
    }
    &-dots {
      > .active {
        background-color: #6a8bad;
      }
    }
  }
</style>