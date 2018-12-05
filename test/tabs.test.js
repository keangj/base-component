import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import Vue from 'vue'

Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.exist
  })
  it('接收 selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <b-tabs selected="item2">
        <b-tabs-head>
          <b-tabs-item name="item1">item1</b-tabs-item>
          <b-tabs-item name="item2">item2选择</b-tabs-item>
          <b-tabs-item name="item3">item3</b-tabs-item>
        </b-tabs-head>
        <b-tabs-body>
          <b-tabs-pane name="item1">content1</b-tabs-pane>
          <b-tabs-pane name="item2">content2</b-tabs-pane>
          <b-tabs-pane name="item3">content3</b-tabs-pane>
        </b-tabs-body>
      </b-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let element = vm.$el.querySelector(`.tabs-item[data-name="item2"]`)
      expect(element.classList.contains('active')).to.be.true
      done()
    })
  })
  // it('接收align', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Row)
  //   const vm = new Constructor({
  //     propsData: {
  //       align: 'right'
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(window.getComputedStyle(element).justifyContent).to.equal('flex-end')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
})
