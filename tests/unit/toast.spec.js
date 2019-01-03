import Toast from '../../src/toast'
import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.exist
  })
  describe('props', function () {
    // this.timeout(10000) // 设置测试超时时间
    xit('可以设置autoClose.', () => {
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: 1
        }
      })
      let vm = wrapper.vm
      // let div = document.createElement('div')
      // document.body.appendChild(div)
      // const Constructor = Vue.extend(Toast)
      // const vm = new Constructor({
      //   propsData: {
      //     autoClose: 1
      //   }
      // }).$mount(div)
        console.log(1)
      vm.$on('beforeClose', () => {
        console.log(2)
        expect(document.body.contains(vm.$el)).to.eq(false)
        // done()
      })
    })
    it('可以设置 closeButton.', () => {
      const callback = sinon.fake()
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: '关闭',
            callback
          }
        }
      })
      // let vm = wrapper.vm
      expect(wrapper.find('.close').text()).to.eq('关闭')
      // expect(wrapper.find('.content-wrapper').element).to.not.exist
      // wrapper.find('.popover').trigger('mouseenter')
      // expect(wrapper.find('.content-wrapper').element).to.exist
      // const Constructor = Vue.extend(Toast)
      // const vm = new Constructor({
      //   propsData: {
      //     closeButton: {
      //       text: '关闭',
      //       callback
      //     }
      //   }
      // }).$mount()
      // let closeButton = vm.$el.querySelector('.close')
      // expect(closeButton.textContent.trim()).to.eq('关闭')
      // closeButton.click()
      wrapper.find('.close').trigger('click')
      expect(callback).to.have.been.called
    })
    xit('可以设置 enableHtml.', () => {
      const wrapper = mount(Toast, {
        slots: {
          default: {template: '<b id="test">test</b>'},
          // content: '<div>popover content</div>'
        },
        propsData: {
          enableHtml: true
        }
      })
      // const Constructor = Vue.extend(Toast)
      // const vm = new Constructor({
      //   propsData: {
      //     enableHtml: true
      //   }
      // })
      // vm.$slots.default = ['<b id="test">test</b>']
      // vm.$mount()
      // let bElement = vm.$el.querySelector('#test')
      // expect(bElement).to.exist
    })
    it('设置 position', function () {
      const wrapper = mount(Toast, {
        propsData: {
          position: 'bottom'
        }
      })
      expect(wrapper.classes()).to.includes('position-bottom')
    })
  })
})
