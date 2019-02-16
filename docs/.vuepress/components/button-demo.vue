<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div>
      <b-button>默认按钮</b-button>
      <b-button icon="settings">带icon的按钮</b-button>
      <b-button :loading="true">带loading的按钮</b-button>
      <b-button disabled>禁用按钮</b-button>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  export default {
    components: {
      'b-button': Button
    },
    data () {
      return {
        content: `
          <b-button>默认按钮</b-button>
          <b-button icon="settings">默认按钮</b-button>
          <b-button :loading="true">默认按钮</b-button>
          <b-button disabled>默认按钮</b-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>