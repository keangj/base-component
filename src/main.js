import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue'
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
// import Cascader from './cascader'
// import CascaderItem from './cascader-items'
//
// Vue.use(plugin)
// // import chai from 'chai'
// // import spise from 'chai-spies'
//
// Vue.component('b-button', Button)
// Vue.component('b-button-group', ButtonGroup)
// Vue.component('b-col', Col)
// Vue.component('b-collapse', Collapse)
// Vue.component('b-collapse-item', CollapseItem)
// Vue.component('b-content', Content)
// Vue.component('b-footer', Footer)
// Vue.component('b-header', Header)
// Vue.component('b-icon', Icon)
// Vue.component('b-input', Input)
// Vue.component('b-layout', Layout)
// Vue.component('b-popover', Popover)
// Vue.component('b-row', Row)
// Vue.component('b-sider', sider)
// Vue.component('b-tabs', Tabs)
// Vue.component('b-tabs-body', TabsBody)
// Vue.component('b-tabs-head', TabsHead)
// Vue.component('b-tabs-item', TabsItem)
// Vue.component('b-tabs-pane', TabsPane)
// Vue.component('b-toast', Toast)
// Vue.component('b-cascader', Cascader)
// Vue.component('b-cascader-item', CascaderItem)
//
// let vm = new Vue({
//   el: '#app',
//   data () {
//     return {
//       selected: ['2'],
//       source: [
//         {
//           name: '浙江',
//           children: [
//             {
//               name: '杭州',
//               children: [
//                 { name: '上城' },
//                 { name: '下城' },
//                 { name: '江干' }
//               ]
//             }
//           ]
//         },
//         {
//           name: '江苏',
//           children: [
//             {
//               name: '南京',
//               children: [
//                 { name: '玄武' },
//                 { name: '鼓楼' },
//                 { name: '雨花' }
//               ]
//             },
//             {
//               name: '徐州'
//             }
//           ]
//         },
//         {
//           name: '河南',
//           children: [
//             {
//               name: '郑州',
//               children: [
//                 { name: '金水' },
//                 { name: '二七' }
//               ]
//             },
//             {
//               name: '洛阳',
//               children: []
//             }
//           ]
//         }
//       ]
//     }
//   },
//   methods: {
//     yyy () {
//       console.log('yyy')
//     }
//   }
// })
