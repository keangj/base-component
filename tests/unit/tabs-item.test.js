import Tabs from '../../src/tabs'
import TabsHead from '../../src/tabs-head'
import TabsBody from '../../src/tabs-body'
import TabsItem from '../../src/tabs-item'
import TabsPane from '../../src/tabs-pane'
import Vue from 'vue'

Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.exist
  })
  it('接受 name.', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: '123'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.be.eq('123')
    vm.$destroy()
  })
  it('接受 disabled.', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    vm.$destroy()
  })
})
