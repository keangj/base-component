<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <b-tabs selected="2">
      <b-tabs-head>
        <b-tabs-item name="1">标签1</b-tabs-item>
        <b-tabs-item name="2">标签2</b-tabs-item>
        <b-tabs-item name="3" disabled>标签3</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="1">内容1</b-tabs-pane>
        <b-tabs-pane name="2">内容2</b-tabs-pane>
        <b-tabs-pane name="3">内容3</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import BTabs from '../../../src/tabs/tabs'
  import BTabsBody from '../../../src/tabs/tabs-body'
  import BTabsHead from '../../../src/tabs/tabs-head'
  import BTabsItem from '../../../src/tabs/tabs-item'
  import BTabsPane from '../../../src/tabs/tabs-pane'
  export default {
    components: {BTabs, BTabsBody, BTabsHead, BTabsItem, BTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          <b-tabs selected="2">
            <b-tabs-head>
              <b-tabs-item name="1">标签1</b-tabs-item>
              <b-tabs-item name="2">标签2</b-tabs-item>
              <b-tabs-item name="3" disabled>标签3</b-tabs-item>
            </b-tabs-head>
            <b-tabs-body>
              <b-tabs-pane name="1">内容1</b-tabs-pane>
              <b-tabs-pane name="2">内容2</b-tabs-pane>
              <b-tabs-pane name="3">内容3</b-tabs-pane>
            </b-tabs-body>
          </b-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>