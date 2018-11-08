<template>
  <div class="toast">
    <slot></slot>
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
        default: true
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
      }
    },
    mounted() {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    },
    methods: {
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
$toast-height: 40px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 .5em;
  min-height: $toast-height;
  font-size: $font-size;
  color: #fff;
  background: rgba(0,0,0,0.74);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
  .close {
    border-left: 1px solid #aaa;
    padding-left: 10px;
    padding-right: 3px;
    margin-left: 10px;
    cursor: pointer;
    height: $toast-height;
    line-height: $toast-height;
  }
}
</style>