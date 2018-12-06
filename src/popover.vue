<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  border: 1px solid red;
  display: inline-block;
  .content-wrapper {
    border: 2px solid #aaa;
  }
}
</style>