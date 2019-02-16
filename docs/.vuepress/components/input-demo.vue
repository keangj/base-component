<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <b-input value="中文"></b-input>
    <b-input value="中文" disabled></b-input>
    <b-input value="中文" readonly></b-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import BInput from '../../../src/input'
  export default {
    components: {BInput},
    data () {
      return {
        selected: '1',
        content: `
          <b-input></b-input>
          <b-input value="中文"></b-input>
          <b-input value="中文" disabled></b-input>
          <b-input value="中文" readonly></b-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>