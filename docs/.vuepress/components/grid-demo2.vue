<template>
  <div style="padding-top: 16px;">
    <h2>间隔</h2>
    <p>
      <strong>预览</strong>
    </p>
    <b-row gutter="20">
      <b-col span="8">
        <div class="b-content"></div>
      </b-col>
      <b-col span="8">
        <div class="b-content"></div>
      </b-col>
      <b-col span="8">
        <div class="b-content"></div>
      </b-col>
    </b-row>
    <b-row gutter="10">
      <b-col span="6">
        <div class="b-content"></div>
      </b-col>
      <b-col span="6">
        <div class="b-content"></div>
      </b-col>
      <b-col span="6">
        <div class="b-content"></div>
      </b-col>
      <b-col span="6">
        <div class="b-content"></div>
      </b-col>
    </b-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .b-row {
    margin: 10px 0;
  }
  .b-content {
    height: 50px;
    border: 1px solid #F2F6FC;
    background: #aaa;
    border-radius: 4px;
  }
</style>
<script>
  import bRow from '../../../src/grid/row'
  import bCol from '../../../src/grid/col'
  export default {
    components: {bRow, bCol},
    data () {
      return {
        content: `
          <b-row gutter="20">
            <b-col span="8">
              <div class="b-content"></div>
            </b-col>
            <b-col span="8">
              <div class="b-content"></div>
            </b-col>
            <b-col span="8">
              <div class="b-content"></div>
            </b-col>
          </b-row>
          <b-row gutter="10">
            <b-col span="6">
              <div class="b-content"></div>
            </b-col>
            <b-col span="6">
              <div class="b-content"></div>
            </b-col>
            <b-col span="6">
              <div class="b-content"></div>
            </b-col>
            <b-col span="6">
              <div class="b-content"></div>
            </b-col>
          </b-row>
          <style>
            * {
              box-sizing: border-box;
            }
            .b-content {
              height: 50px;
              border: 1px solid #F2F6FC;
              background: #aaa;
              border-radius: 4px;
            }
          </style>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>