<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      :class="{[`position-${position}`]: true}"
      v-if="visible"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span class="trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'b-popover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) !== -1
        }
      }
    },
    data () {
      return {
        visible: false
      }
    },
    mounted () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    methods: {
      positionContent () {
        const { contentWrapper, triggerWrapper } = this.$refs
        // 将 popover 内容区域移动到 dom 最外层
        document.body.appendChild(contentWrapper)
        const { left, top, bottom, width, height } = triggerWrapper.getBoundingClientRect()
        const { height: contentWrapperHeight } = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: window.scrollY + top,
            left: window.scrollY + left
          },
          bottom: {
            top: window.scrollY + bottom,
            left: window.scrollY + left
          },
          left: {
            top: window.scrollY + top - (contentWrapperHeight - height) / 2,
            left: window.scrollY + left
          },
          right: {
            top: window.scrollY + top - (contentWrapperHeight - height) / 2,
            left: window.scrollY + left + width
          },
        }
        // 设置内容区域的位置
        contentWrapper.style.top = `${positions[this.position].top}px`
        contentWrapper.style.left = `${positions[this.position].left}px`
      },
      elementHandler (event) {
        if (this.$refs.popover &&
          (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
        ) {return}
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))
        ) {return}
        this.close()
      },
      close () {
        this.visible = false
        console.log('移除监听')
        document.removeEventListener('click', this.elementHandler)
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.elementHandler)
        })
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "var";*/
  $border-color: #333;
  $border-radius: 4px;
.popover {
  position: relative;
  display: inline-block;
  > .trigger-wrapper {
    display: inline-block;
  }
}
.content-wrapper {
  position: absolute;
  padding: .5em 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // box-shadow: 0px 0px 3px $border-color;
  filter: drop-shadow(0 1px 1px $border-color);
  background-color: #fff;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    position: absolute;
    content: '';
    display: block;
    border: 10px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      border-bottom: none;
      left: 10px;
    }
    &::before {
      top: 100%;
      border-top-color: $border-color;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: #fff;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      border-top: none;
      left: 10px;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: #fff;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      border-right: none;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: $border-color;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: #fff;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      border-left: none;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: $border-color;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: #fff;
    }
  }
}
</style>