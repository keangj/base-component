<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
    data () {
      return {
        visible: false
      }
    },
    methods: {
      positionContent () {
        // 将 popover 内容区域移动到 dom 最外层
        document.body.appendChild(this.$refs.contentWrapper)
        // 设置内容区域的位置
        let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = `${window.scrollY + top}px`
        this.$refs.contentWrapper.style.left = `${window.scrollY + left}px`
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
  margin-top: -10px;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // box-shadow: 0px 0px 3px $border-color;
  filter: drop-shadow(0 1px 1px $border-color);
  background-color: #fff;
  transform: translateY(-100%);
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    position: absolute;
    left: 10px;
    content: '';
    display: block;
    border: 10px solid transparent;
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
</style>