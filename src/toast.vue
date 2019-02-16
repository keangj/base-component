<template>
  <div class="b-toast" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-toast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5,
        validator (value) {
          return value === false || typeof value === 'number'
        }
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
          }, this.autoClose * 1000)
        }
      },
      resetLineHeight () {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      closeToast () {
        this.$el.remove()
        this.$emit('beforeClose')
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
@import "var";

@keyframes fade-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
@keyframes slide-up {
  0%{opacity: 0; transform: translateX(-50%) translateY(-100%);}
  100%{opacity: 1; transform: translateX(-50%) translateY(0%);}
}
@keyframes slide-down {
  0%{opacity: 0; transform: translateX(-50%) translateY(100%);}
  100%{opacity: 1; transform: translateX(-50%) translateY(0%);}
}
.b-toast {
  position: fixed;
  left: 50%;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    animation: slide-up $animation-duration;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-duration;
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    animation: slide-down $animation-duration;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .toast {
    display: flex;
    align-items: center;
    border-radius: 4px;
    min-height: $toast-min-height;
    font-size: $font-size;
    color: #fff;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
    .message {
      padding: 8px 1em;
      word-break:break-all;
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
  }
}
</style>