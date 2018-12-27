<template>
  <div id="app" style="padding: 100px;">
    <b-cascader
      :source.sync="source"
      :selected.sync="selected"
      popover-height="200px"
      @update:selected="xxx"
      :load-data="loadData"
    ></b-cascader>
    {{source}}
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

console.log(ajax())

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
    xxx() {
      ajax(this.selected[0].id)
        .then(result => {
          console.log(result)
          console.log(this.source)
          let lastLevelSelected = this.source.filter(item => {
            return item.id === this.selected[0].id
          })[0]
          // lastLevelSelected.children = result
          this.$set(lastLevelSelected, 'children', result)
          console.log(lastLevelSelected)
        })
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
</style>
