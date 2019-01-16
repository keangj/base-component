<template>
  <div id="app" style="padding: 100px;">
    <b-nav :selected.sync="selected" >
      <b-nav-item name="1">aaa</b-nav-item>
        <b-sub-nav>
          <template slot="title">bbb</template>
          <b-nav-item name="a">111</b-nav-item>
          <b-nav-item name="b">222</b-nav-item>
          <b-nav-item name="c">333</b-nav-item>
        </b-sub-nav>
      <b-nav-item name="3">ccc</b-nav-item>
      <b-nav-item name="4">ddd</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import Button from './button/button'
// import Icon from './icon'
// import ButtonGroup from './button-group'
// import Input from './input'
// import Col from './col'
// import Row from './row'
// import Layout from './layout'
// import Content from './content'
// import Header from './header'
// import Footer from './footer'
// import sider from './sider'
// import Toast from './toast'
// import plugin from './plugin'
// import Tabs from './tabs'
// import TabsHead from './tabs-head'
// import TabsBody from './tabs-body'
// import TabsItem from './tabs-item'
// import TabsPane from './tabs-pane'
// import Popover from './popover'
// import Collapse from './collapse'
// import CollapseItem from './collapse-item'
import Cascader from './cascader/cascader'
// import CascaderItem from './cascader-items'
import db from '../tests/fixtures/db'
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'
import Nav from './nav/nav'
import SubNav from './nav/sub-nav'
import NavItem from './nav/nav-item'

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
    'b-cascader': Cascader,
    'b-slides': Slides,
    'b-slides-item': SlidesItem,
    'b-nav': Nav,
    'b-sub-nav': SubNav,
    'b-nav-item': NavItem,
  },
  data () {
    return {
      selected: ['b'],
      source: null
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
