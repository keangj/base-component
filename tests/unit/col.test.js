import Col from '../../src/col'
import Row from '../../src/row'
import Vue from 'vue'
const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.exist
  })
  it('接收span', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收offset', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-1')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收xs', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xs: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-xs-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xs-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收sm', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        sm: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-sm-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-sm-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收md', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        md: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-md-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-md-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收lg', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        lg: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-lg-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-lg-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收xl', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xl: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-xl-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xl-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收xxl', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xxl: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-xxl-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-xxl-2')).to.equal(true)
    vm.$el.remove()
    vm.$destroy()
  })
})
