import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
// import chai from 'chai'
// import spise from 'chai-spies'

Vue.component('b-button', Button)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-icon', Icon)
Vue.component('b-input', Input)

let vm = new Vue({
  el: '#app',
  data () {
    return { loading1: false }
  },
  methods: {
    aaa (e) {
      console.log('change', e.target.value)
    },
    bbb (e) {
      console.log('input', e.target.value)
    },
    ccc (e) {
      console.log('focus', e.target)
    },
    ddd (e) {
      console.log('blur', e.target)
    }
  }
})

// // 使用 expect
// const expect = chai.expect
// chai.use(spise)
//
// // 测试按钮含有 icon
// {
//   // 获得 button 实例构造函数
//   const Constructor = Vue.extend(Button)
//   // 创建 button 实例
//   const vm = new Constructor({
//     // 传递 props
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   // 将实例挂载到页面
//   vm.$mount()
//   // 从实例中获取 use 元素
//   let useElement = vm.$el.querySelector('use')
//   // 从 use 获取要测试的属性
//   let href = useElement.getAttribute('xlink:href')
//   // 用 chai 测试属性是否符合预期
//   expect(href).to.eq('#i-settings')
//   // 销毁测试实例
//   vm.$el.remove()
//   vm.$destroy()
// }
//
// // 测试 loading
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       loading: true
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }
//
// // 测试 icon position
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   console.log(window.getComputedStyle(svg).order)
//   expect(order).to.eq('1')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   console.log(window.getComputedStyle(svg).order)
//   expect(order).to.eq('2')
//   vm.$el.remove()
//   vm.$destroy()
// }
//
// // 测试事件
//
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function () {})
//   // 监听 spy 函数
//   vm.$on('click', spy)
//   // 期望 button 被执行
//   let button = vm.$el
//   // 执行 button
//   button.click()
//   // 测试
//   expect(spy).to.have.been.called()
// }
