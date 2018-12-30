import Popover from '@/popover'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'

describe('Popover.vue', () => {
  it('存在.', () => {
    expect(Popover).to.be.exist
  })
  it('接收 position', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: '<button>click me</button>'},
        content: '<div>popover content</div>'
      },
      propsData: {
        position: 'right'
      }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    const classes =  wrapper.find('.content-wrapper').classes()
    expect(classes).to.includes('position-right')
  })
  it('接收 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: '<button>click me</button>'},
        content: '<div>popover content</div>'
      },
      propsData: {
        position: 'right',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    expect(wrapper.find('.content-wrapper').element).to.exist
  })
})
