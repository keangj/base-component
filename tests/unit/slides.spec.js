import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Slides.vue', () => {
  it('存在.', () => {
    expect(Slides).to.be.exist
  })
  it('接受 slides item, 默认显示第一个', (done) => {
    Vue.component('b-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `,
      }
    })

    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })
  it('selected 是哪个就选中哪项', (done) => {
    Vue.component('b-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `
      },
      propsData: {
        autoPlay: false,
        selected: '2'
      }
    })

    setTimeout(() => {
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    })
  })
  it('点击哪个按钮就显示哪个', (done) => {
    Vue.component('b-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `
      },
      propsData: {
        autoPlay: false
      },
      listeners: {
        'update:selected': (index) => {
          expect(index).to.eq('2')
          done()
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })
  it('自动播放', (done) => {
    Vue.component('b-slides-item', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `
      },
      propsData: {
        autoPlay: true,
        autoPlayDelay: 10
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 11)
  })
})