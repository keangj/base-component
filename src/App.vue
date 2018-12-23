<template>
  <div id="app" style="padding: 100px;">
    {{selected}}
    <b-cascader
      :source="source"
      :selected="selected"
      popover-height="200px"
      @update:selected="selected = $event"
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
      source: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                { name: '上城' },
                { name: '下城' },
                { name: '江干' }
              ]
            }
          ]
        },
        {
          name: '江苏',
          children: [
            {
              name: '南京',
              children: [
                { name: '玄武' },
                { name: '鼓楼' },
                { name: '雨花' }
              ]
            },
            {
              name: '徐州'
            }
          ]
        },
        {
          name: '河南',
          children: [
            {
              name: '郑州',
              children: [
                { name: '金水' },
                { name: '二七' }
              ]
            },
            {
              name: '洛阳',
              children: []
            }
          ]
        }
      ]
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
