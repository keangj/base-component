<template>
  <div id="app" style="padding: 100px;">
    <b-upload accept="image/*"
              action="http://127.0.0.1:3000/upload"
              name="file"
              multiple
              :on-success="onSuccess"
              :file-list.sync="fileList">
      <b-button>上传</b-button>
      <div slot="tips">tips</div>
    </b-upload>
    <!--    <b-button @click="$toast('点击弹出提示')">上方弹出</b-button>-->
    <!--    <b-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</b-button>-->
    <!--    <b-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</b-button>-->
    <!--<b-nav :selected.sync="selected" vertical>-->
    <!--<b-nav-item name="1">aaa</b-nav-item>-->
    <!--<b-sub-nav name="a">-->
    <!--<template slot="title">111</template>-->
    <!--<b-nav-item name="a1">111</b-nav-item>-->
    <!--<b-nav-item name="a2">111</b-nav-item>-->
    <!--<b-nav-item name="a3">111</b-nav-item>-->
    <!--<b-sub-nav name="b">-->
    <!--<template slot="title">222</template>-->
    <!--<b-nav-item name="b1">222</b-nav-item>-->
    <!--<b-nav-item name="b2">222</b-nav-item>-->
    <!--<b-nav-item name="b3">222</b-nav-item>-->
    <!--<b-sub-nav name="c">-->
    <!--<template slot="title">333</template>-->
    <!--<b-nav-item name="c1">333</b-nav-item>-->
    <!--<b-nav-item name="c2">333</b-nav-item>-->
    <!--<b-nav-item name="c3">333</b-nav-item>-->
    <!--</b-sub-nav>-->
    <!--</b-sub-nav>-->
    <!--</b-sub-nav>-->
    <!--<b-nav-item name="3">ccc</b-nav-item>-->
    <!--<b-nav-item name="4">ddd</b-nav-item>-->
    <!--</b-nav>-->
    <!--<b-nav :selected.sync="selected">-->
    <!--<b-nav-item name="1"><a href="//baidu.com" target="_blank">aaa</a></b-nav-item>-->
    <!--<b-sub-nav name="a">-->
    <!--<template slot="title">111</template>-->
    <!--<b-nav-item name="a1">111</b-nav-item>-->
    <!--<b-nav-item name="a2">111</b-nav-item>-->
    <!--<b-nav-item name="a3">111</b-nav-item>-->
    <!--<b-sub-nav name="b">-->
    <!--<template slot="title">222</template>-->
    <!--<b-nav-item name="b1">222</b-nav-item>-->
    <!--<b-nav-item name="b2">222</b-nav-item>-->
    <!--<b-nav-item name="b3">222</b-nav-item>-->
    <!--<b-sub-nav name="c">-->
    <!--<template slot="title">333</template>-->
    <!--<b-nav-item name="c1">333</b-nav-item>-->
    <!--<b-nav-item name="c2">333</b-nav-item>-->
    <!--<b-nav-item name="c3">333</b-nav-item>-->
    <!--</b-sub-nav>-->
    <!--</b-sub-nav>-->
    <!--</b-sub-nav>-->
    <!--<b-nav-item name="3">ccc</b-nav-item>-->
    <!--<b-nav-item name="4">ddd</b-nav-item>-->
    <!--</b-nav>-->
  </div>
</template>

<script>
  import Button from './button/button'
  import Upload from './upload'
  // import Icon from './icon'
  // import ButtonGroup from './button-group'
  import Input from './input'
  import Col from './grid/col'
  import Row from './grid/row'
  // import Layout from './layout'
  // import Content from './content'
  // import Header from './header'
  // import Footer from './footer'
  // import sider from './sider'
  // import Toast from './toast'
  import plugin from './plugin'
  import Tabs from './tabs/tabs'
  import TabsHead from './tabs/tabs-head'
  import TabsBody from './tabs/tabs-body'
  import TabsItem from './tabs/tabs-item'
  import TabsPane from './tabs/tabs-pane'
  import Popover from './popover'
  import Collapse from './collapse/collapse'
  import CollapseItem from './collapse/collapse-item'
  import Cascader from './cascader/cascader'
  // import CascaderItem from './cascader-items'
  import db from '../tests/fixtures/db'
  import Slides from './slides/slides'
  import SlidesItem from './slides/slides-item'
  import Nav from './nav/nav'
  import SubNav from './nav/sub-nav'
  import NavItem from './nav/nav-item'
  import Vue from 'vue'
  Vue.use(plugin)

  function ajax (parentId = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = db.filter(item => item.parent_id === parentId)
        result.forEach(node => {
          node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
        })
        resolve(result)
      }, 1000)
    })
  }

  export default {
    name: 'app',
    components: {
      'b-button': Button,
      'b-input': Input,
      'b-cascader': Cascader,
      'b-slides': Slides,
      'b-slides-item': SlidesItem,
      'b-nav': Nav,
      'b-col': Col,
      'b-row': Row,
      'b-sub-nav': SubNav,
      'b-nav-item': NavItem,
      'b-collapse': Collapse,
      'b-collapse-item': CollapseItem,
      'b-popover': Popover,
      'b-tabs': Tabs,
      'b-tabs-head': TabsHead,
      'b-tabs-item': TabsItem,
      'b-tabs-pane': TabsPane,
      'b-tabs-body': TabsBody,
      'b-upload': Upload,
    },
    data () {
      return {
        selected: ['a'],
        source: null,
        x: ['2','3'],
        fileList: []
      }
    },
    mounted () {
      // let n = 1
      // setInterval(() => {
      //   this.selected = n.toString()
      //   n += 1
      //   console.log(this.selected)
      // }, 2000)
      ajax(0)
        .then(result => {
          this.source = result
        })
      // this.source = [
      //   {
      //     name: '浙江',
      //     children: [
      //       {
      //         name: '杭州',
      //         children: [
      //           { name: '上城' },
      //           { name: '下城' },
      //           { name: '江干' }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     name: '江苏',
      //     children: [
      //       {
      //         name: '南京',
      //         children: [
      //           { name: '玄武' },
      //           { name: '鼓楼' },
      //           { name: '雨花' }
      //         ]
      //       },
      //       {
      //         name: '徐州'
      //       }
      //     ]
      //   },
      //   {
      //     name: '河南',
      //     children: [
      //       {
      //         name: '郑州',
      //         children: [
      //           { name: '金水' },
      //           { name: '二七' }
      //         ]
      //       },
      //       {
      //         name: '洛阳',
      //         children: []
      //       }
      //     ]
      //   }
      // ]
    },
    methods: {
      onSuccess (res) {
        console.log(res)
      },
      loadData ({id}, updateSource) {
        ajax(id)
          .then(result => {
            updateSource(result)
          })
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size);
  }
  .box {
    width: 100%;
    height: 511px;
    background-color: #d3dce6;
  }
  .x {
    background-color: #ddd;
  }
</style>
