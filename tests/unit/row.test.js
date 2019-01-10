import Col from '../../src/grid/col'
import Row from '../../src/grid/row'
import Vue from 'vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.exist
  })
  it('接收gutter', (done) => {
    Vue.component('b-row', Row)
    Vue.component('b-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <b-row gutter="20">
        <b-col span="12"></b-col>
        <b-col span="12"></b-col>
      </b-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(window.getComputedStyle(row).marginLeft).to.equal('-10px')
      expect(window.getComputedStyle(row).marginRight).to.equal('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(window.getComputedStyle(cols[0]).paddingRight).to.equal('10px')
      expect(window.getComputedStyle(cols[1]).paddingLeft).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收align', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(window.getComputedStyle(element).justifyContent).to.equal('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})
