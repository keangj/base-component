<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="enableHtml"></slot>
      <div v-if="!enableHtml" v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'b-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: false
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.resetLineHeight()
      this.execAutoClose()
    },
    methods: {
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      resetLineHeight () {
        this.$nextTick(() => {
          console.log(this.$refs.toast.getBoundingClientRect().height)
          console.log(this.$refs.line.getBoundingClientRect().height)
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: $font-size;
  color: #fff;
  background: rgba(0,0,0,0.74);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
  .message {
    padding: 8px 1em;
  }
  .close {
    padding-left: 13px;
    padding-right: 13px;
    cursor: pointer;
    height: 100%;
  }
  .line {
    border-right: 1px solid #666;
    height: 100%;
  }
}
</style>