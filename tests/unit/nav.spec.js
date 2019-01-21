import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/nav-item'
import SubNav from '../../src/nav/sub-nav'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)

describe('Nav.vue', () => {
  it('存在.', () => {
    expect(Nav).to.be.exist
  })
  it('可以设置 selected.', () => {
    Vue.component('b-sub-nav', SubNav)
    Vue.component('b-nav-item', NavItem)
    const wrapper = mount(Nav, {
      slots: {
        default: `
          <b-nav-item name="a">aaa</b-nav-item>
          <b-sub-nav name="b">
            <template slot="title">bbb</template>
            <b-nav-item name="b1">b1</b-nav-item>
            <b-nav-item name="b2">b2</b-nav-item>
            <b-nav-item name="b3">b3</b-nav-item>
          </b-sub-nav>
          <b-nav-item name="c">ccc</b-nav-item>
        `,
      },
      propsData: {
        selected: ['c']
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="c"].selected').exists()).to.be.true
    })
  })
  it('可以触发 update:selected 事件', (done) => {
    Vue.component('b-sub-nav', SubNav)
    Vue.component('b-nav-item', NavItem)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      slots: {
        default: `
          <b-nav-item name="a">aaa</b-nav-item>
          <b-sub-nav name="b">
            <template slot="title">bbb</template>
            <b-nav-item name="b1">b1</b-nav-item>
            <b-nav-item name="b2">b2</b-nav-item>
            <b-nav-item name="b3">b3</b-nav-item>
          </b-sub-nav>
          <b-nav-item name="c">ccc</b-nav-item>
        `,
      },
      propsData: {
        selected: ['c']
      },
      listeners: {
        'update:selected': callback
      }
    })
    wrapper.find('[data-name="c"]').trigger('click')
    expect(callback).to.have.been.calledWith(['c'])
    done()
  })
})