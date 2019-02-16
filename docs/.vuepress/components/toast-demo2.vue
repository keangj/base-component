<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮内容及关闭后的回调</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <b-button @click="onClick">中间弹出</b-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .b-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import BButton from '../../../src/button/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {BButton},
    data () {
      return {
        content: `
          <b-button @click="onClick">中间弹出</b-button>
          <script>
            methods: {
              onClick () {
                this.$toast('我是弹窗内容', {
                  position: 'middle',
                  closeButton: {
                    text: 'X',
                    callback: () => {
                      console.log('回调执行了')
                    }
                  }
                })
              }
            }
          <\/script>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClick () {
        this.$toast('我是弹窗内容', {
          position: 'middle',
          closeButton: {
            text: 'X',
            callback: () => {
              console.log('回调执行了')
            }
          }
        })
      }
    }
  }
</script>