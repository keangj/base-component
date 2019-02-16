<template>
  <div style="padding-top: 16px;">
    <h2>hover 激活</h2>
    <p>
      <strong>预览</strong>
    </p>

    <b-popover trigger="hover">
      <b-button>上方</b-button>
      <template slot="content">
        内容
      </template>
    </b-popover>
    <b-popover position="bottom" trigger="hover">
      <b-button>下方</b-button>
      <template slot="content">
        内容
      </template>
    </b-popover>
    <b-popover position="left" trigger="hover">
      <b-button>左边</b-button>
      <template slot="content">
        内容
      </template>
    </b-popover>
    <b-popover position="right" trigger="hover">
      <b-button>右边</b-button>
      <template slot="content">
        内容
      </template>
    </b-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import BButton from '../../../src/button/button'
  import BPopover from '../../../src/popover'
  export default {
    components: {BButton, BPopover},
    data () {
      return {
        content: `
          <b-popover>
            <b-button>上方</b-button>
            <template slot="content">
              内容
            </template>
          </b-popover>
          <b-popover position="bottom">
            <b-button>下方</b-button>
            <template slot="content">
              内容
            </template>
          </b-popover>
          <b-popover position="left">
            <b-button>左边</b-button>
            <template slot="content">
              内容
            </template>
          </b-popover>
          <b-popover position="right">
            <b-button>右边</b-button>
            <template slot="content">
              内容
            </template>
          </b-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>