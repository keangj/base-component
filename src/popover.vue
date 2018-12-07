<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
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
      xxx () {
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            // 将 popover 内容区域移动到 dom 最外层
            document.body.appendChild(this.$refs.contentWrapper)
            // 设置内容区域的位置
            let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.top = `${window.scrollY + top}px`
            this.$refs.contentWrapper.style.left = `${window.scrollY + left}px`
            let elementHandler = () => {
              this.visible = false
              console.log('移除监听')
              document.removeEventListener('click', elementHandler)
            }
            console.log('添加监听')
            document.addEventListener('click', elementHandler)
          })
        } else {
          console.log('实例隐藏')
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