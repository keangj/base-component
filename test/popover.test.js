import Popover from '../src/popover'
import Vue from 'vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.exist
  })
  it('接收 position', (done) => {
    Vue.component('b-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <b-popover position="top" ref="popover">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <template>
        <button>click me</button>
      </template>
    </b-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.popover.$refs
      expect(contentWrapper.classList.contains('position-top')).to.be.true
      done()
    })
  })
})
