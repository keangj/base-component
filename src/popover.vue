<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
.popover {
  position: relative;
  /*border: 1px solid red;*/
  display: inline-block;
}
.content-wrapper {
  position: absolute;
  border: 2px solid #aaa;
  transform: translateY(-100%);
}
</style>