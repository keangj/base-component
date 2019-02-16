<template>
  <div style="padding-top: 16px;">
    <h2>设置 HTML 内容和自动关闭时间</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <b-button @click="onClick">上方弹出</b-button>
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
          <b-button @click="onClick">上方弹出</b-button>
          <script>
            methods: {
              onClick () {
                this.$toast('我是弹窗<b style="color: #ed4014;">内容</b>', {
                  enableHtml: true,
                  autoClose: 1
                })
              }
            }
          <\/script>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClick () {
        this.$toast('我是弹窗<b style="color: #ed4014;">内容</b>', {
          enableHtml: true,
          autoClose: 1
        })
      }
    }
  }
</script>