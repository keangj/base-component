<template>
  <div style="padding-top: 16px;">
    <h2>基础用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <b-slides :selected.sync="selected">
      <b-slides-item name="1">
        <div class="box">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box">3</div>
      </b-slides-item>
    </b-slides>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import BSlides from '../../../src/slides/slides'
  import BSlidesItem from '../../../src/slides/slides-item'
  export default {
    components: {
      BSlides,
      BSlidesItem
    },
    data () {
      return {
        selected: "1",
        content: `
          <b-slides :selected.sync="selected">
            <b-slides-item name="1">
              <div class="box">1</div>
            </b-slides-item>
            <b-slides-item name="2">
              <div class="box">2</div>
            </b-slides-item>
            <b-slides-item name="3">
              <div class="box">3</div>
            </b-slides-item>
          </b-slides>
          data: {
            selected: '1'
          }
          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: blue;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 300px;
    background: #4abf8a;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>