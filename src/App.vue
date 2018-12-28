<template>
  <div id="app" style="padding: 100px;">
    <div v-for="item in selected">
      {{item.name}} <span v-for="i in item.children">{{i.name}}</span>
    </div>
    <b-cascader
      :source.sync="source"
      :selected.sync="selected"
      popover-height="200px"
      :load-data="loadData"
    ></b-cascader>
  </div>
</template>

<script>
// import Button from './button'
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
import Cascader from './cascader'
// import CascaderItem from './cascader-items'
import db from './db'

function ajax (parentId = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId)
      resolve(result)
    }, 1000)
  })
}

export default {
  name: 'app',
  components: {
    // 'b-button': Button,
    'b-cascader': Cascader
    // 'b-cascader-items': CascaderItem
  },
  data () {
    return {
      selected: [],
      source: null
    }
  },
  mounted () {
    ajax(0)
      .then(result => {
      this.source = result
    })
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
</style>
