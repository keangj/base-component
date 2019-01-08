<template>
  <div
    class="b-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="b-slides-window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span @click="select(selectedIndex - 1)">
        <b-icon name="left"></b-icon>
      </span>
      <span
        v-for="n in childrenLength"
        :class="{active: selectedIndex === n-1}"
        @click="select(n-1)"
      >
        {{ n }}
      </span>
      <span @click="select(selectedIndex + 1)">
        <b-icon name="right"></b-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'b-slides',
    components: {
      'b-icon': Icon
    },
    props: {
      selected: String,
      autoPlay: Boolean
    },
    data () {
      return {
        childrenLength: 0,
        lastSelectIndex: undefined,
        timerId: undefined,
        startTouch: undefined,
        endTouch: undefined
      }
    },
    computed: {
      names () {
        return this.items.map(child => child.name)
      },
      selectedIndex () {
        let index = this.names.indexOf(this.selected)
        return index === -1 ? 0 : index
      },
      items () {
        return this.$children.filter(item => item.$options.name === 'b-slides-item')
      }
    },
    mounted () {
      console.log(this.items)
      this.updateSelected()
      this.playAutomatically()
      this.childrenLength = this.items.length
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
      onTouchStart (e) {
        this.pause()
        if (e.touches.length > 1) { return }
        this.startTouch = e.touches[0]
      },
      onTouchEnd (e) {
        console.log(this.endTouch)
        this.endTouch = e.changedTouches[0]
        let { clientX: x1 , clientY: y1 } = this.startTouch
        let { clientX: x2 , clientY: y2 } = this.endTouch
        // 起始至结束位置距离
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        // 两点 Y 轴距离
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          if (x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatically()
        })
      },
      playAutomatically () {
        if (this.timerId) { return }
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index + 1
          this.select(newIndex)
          this.timerId = setTimeout(run, 3000)
        }
        this.timerId = setTimeout(run, 3000)
      },
      getSelected () {
        return this.selected || this.items[0].name
      },
      updateSelected () {
        let selected = this.getSelected()
        this.items.forEach(child => {
          let reverse = this.selectedIndex <= this.lastSelectIndex
          if (this.timerId) {
            if (this.lastSelectIndex === this.items.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            if (this.lastSelectIndex === 0 && this.selectedIndex === this.items.length - 1) {
              reverse = true
            }
          }
          child.reverse = reverse
          this.$nextTick(() => {
            child.selected = selected
          })
        })
      },
      select (newIndex) {
        this.lastSelectIndex = this.selectedIndex
        if (newIndex === -1) { newIndex = this.names.length - 1 }
        if (newIndex === this.names.length) { newIndex = 0 }
        this.$emit('update:selected', this.names[newIndex])
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
      display: flex;
      justify-content: center;
      justify-items: center;
      margin-top: 8px;
      > span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 .2em;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        color: #000;
        background-color: #ddd;
        font-size: 12px;
        /*opacity: .3;*/
        &:hover {
          cursor: pointer;
        }
        &.active {
          background-color: #6a8bad;
          &:hover {
            cursor: default;
          }
        }
      }

    }
  }
</style>