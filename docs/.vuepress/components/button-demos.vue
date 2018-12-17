<template>
  <div>
    <div>
      <b-button>默认按钮</b-button>
      <b-button icon="settings">带icon的按钮</b-button>
      <b-button :loading="true">带loading的按钮</b-button>
      <b-button disable>禁用按钮</b-button>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'b-button': Button
    },
    data () {
      return {
        content: `
          <b-button>默认按钮</b-button>
          <b-button icon="settings">带icon的按钮</b-button>
          <b-button :loading="true">带loading的按钮</b-button>
          <b-button disable>禁用按钮</b-button>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>