<template>
  <div class="toast" :class="toastClasses" ref="toast">
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
        default: 5
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
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
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
            this.closeToast()
          }, this.autoCloseDelay * 1000)
        }
      },
      resetLineHeight () {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      closeToast () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose () {
        this.closeToast()
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
  left: 50%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  min-height: 40px;
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
  &:hover {
    color: #ccc;
  }
  }
  .line {
    border-right: 1px solid #666;
    height: 100%;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>