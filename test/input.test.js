import Input from '../src/input'
import Vue from 'vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(function () {
      // 在本区块的每个测试用例之前执行
      vm.$destroy()
    })
    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: 'val'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('val')
    })
    it('接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const messageElement = vm.$el.querySelector('.error-message')
      expect(messageElement.innerText).to.equal('error')
    })
  })
  describe('支持event事件', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(function () {
      // 在本区块的每个测试用例之前执行
      vm.$destroy()
    })
    it('change input focus blur', () => {
      let events = ['change', 'input', 'focus', 'blur']
      events.forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})
