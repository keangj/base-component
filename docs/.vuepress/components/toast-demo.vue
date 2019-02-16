<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <b-button @click="$toast('我弹出来了')">上方弹出</b-button>
      <b-button @click="$toast('我弹出来了', {position:'middle'})">中间弹出</b-button>
      <b-button @click="$toast('我弹出来了', {position:'bottom'})">下方弹出</b-button>
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
          <b-button @click="$toast('我弹出来了')">上方弹出</b-button>
          <b-button @click="$toast('我弹出来了', {position:'middle'})">中间弹出</b-button>
          <b-button @click="$toast('我弹出来了', {position:'bottom'})">下方弹出</b-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>