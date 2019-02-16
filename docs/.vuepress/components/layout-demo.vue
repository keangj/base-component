<template>
  <div>
    <div>
      <b-button>默认按钮</b-button>
      <b-button icon="settings">带icon的按钮</b-button>
      <b-button :loading="true">带loading的按钮</b-button>
      <b-button disabled>禁用按钮</b-button>
    </div>
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