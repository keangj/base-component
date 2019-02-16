<template>
  <div>
    <h2>手风琴效果</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div>
      <b-collapse :selected.sync=selected accordion>
        <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
        <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
        <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
        <b-collapse-item title="标题4" name="4">内容4</b-collapse-item>
      </b-collapse>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src/collapse/collapse-item'
  export default {
    components: {
      'b-collapse': Collapse,
      'b-collapse-item': CollapseItem
    },
    data () {
      return {
        content: `
          <b-collapse :selected.sync=selected accordion>
            <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
            <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
            <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
            <b-collapse-item title="标题4" name="4">内容4</b-collapse-item>
          </b-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        selected: ['2']
      }
    }
  }
</script>