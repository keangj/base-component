<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      :class="{[`position-${position}`]: true}"
      v-if="visible"
    >
      <slot name="content"></slot>
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
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      positionContent () {
        const { contentWrapper, triggerWrapper } = this.$refs
        // 将 popover 内容区域移动到 dom 最外层
        document.body.appendChild(contentWrapper)
        // 设置内容区域的位置
        console.table(triggerWrapper.getBoundingClientRect())
        let { left, top, bottom, width, height } = triggerWrapper.getBoundingClientRect()
        if (this.position === 'top') {
          contentWrapper.style.top = `${window.scrollY + top}px`
          contentWrapper.style.left = `${window.scrollY + left}px`
        } else if (this.position === 'bottom') {
          contentWrapper.style.top = `${window.scrollY + bottom}px`
          contentWrapper.style.left = `${window.scrollY + left}px`
        } else if (this.position === 'left') {
          console.table(contentWrapper.getBoundingClientRect())
          contentWrapper.style.top = `${window.scrollY + top -
          (contentWrapper.getBoundingClientRect().height - height) / 2}px`
          contentWrapper.style.left = `${window.scrollY + left}px`
        } else if (this.position === 'right') {
          contentWrapper.style.top = `${window.scrollY + top -
          (contentWrapper.getBoundingClientRect().height - height) / 2}px`
          contentWrapper.style.left = `${window.scrollY + left + width}px`
        }
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
          console.log('添加监听')
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