import Input from '../../src/input'
import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.exist
  })

  describe('props', () => {
    it('接收value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: 'val'
        }
      })
      expect(wrapper.find('input').element.value).to.eq('val')
    })

    it('接收disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      expect(wrapper.find('input').element.disabled).to.eq(true)
    })

    it('接收readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true
        }
      })
      expect(wrapper.find('input').element.readOnly).to.eq(true)
    })

    it('接收error', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: 'error'
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes()['href']).to.equal('#i-error')
      expect(wrapper.find('.error-message').text()).to.eq('error')
    })
  })
  describe('支持event事件', () => {
    // const Constructor = Vue.extend(Input)
    // let vm
    //
    // afterEach(function () {
    //   // 在本区块的每个测试用例之前执行
    //   vm.$destroy()
    // })
    it('支持 change input focus blur', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: 'error'
        }
      })
      let vm = wrapper.vm
      let events = ['change', 'input', 'focus', 'blur']
      events.forEach((eventName) => {
        vm = wrapper.vm
        // 创建回调函数
        const callback = sinon.fake()
        // 监听事件
        vm.$on(eventName, callback)
        // 创建事件
        let event = new Event(eventName)
        // 为 target 传值
        Object.defineProperty(
          event, 'target', {
            value: { value: 'hi' },
            enumerable: true
          }
        )
        // 获取 input 元素
        let inputElement = wrapper.find('input').element
        // 调用事件
        inputElement.dispatchEvent(event)
        // 期望回调函数被调用
        if (eventName === 'input') {
          expect(callback).to.have.been.calledWith('hi')
        } else {
          expect(callback).to.have.been.calledWith(event)
        }
      })
    })
  })
})
