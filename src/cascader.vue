<template>
  <div class="cascader"
       ref="cascader"
       v-click-outside="close"
  >
    <div class="trigger" @click="toggle">
      {{selectedText || '&nbsp;'}}
    </div>
    <div class="popover" v-if="popoverVisible">
      <Cascader-item
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        :load-data="loadData"
        :loading-item="loadingItem"
        @update:selected="onUpdateSelected"
      ></Cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-items'
  import ClickOutside from './click-outside'

  export default {
    name: 'b-cascader',
    components: { CascaderItem },
    directives: { ClickOutside },
    props: {
      source: {
        type: Array
      },
      popoverHeight: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function
      }
    },
    data () {
      return {
        popoverVisible: false,
        loadingItem: {}
      }
    },
    computed: {
      selectedText () {
        return this.selected.map(item => item.name).join('/')
      }
    },
    methods: {
      // onClickDocument (e) {
      //   let { cascader } = this.$refs
      //   let { target } = e
      //   if (cascader !== target && !cascader.contains(target)) { this.close() }
      // },
      open () {
        this.popoverVisible = true
        // this.$nextTick(() => {
        //   document.addEventListener('click', this.onClickDocument)
        // })
      },
      close () {
        this.popoverVisible = false
        // document.removeEventListener('click', this.onClickDocument)
      },
      toggle () {
        if (this.popoverVisible) {
          this.close()
        } else {
          this.open()
        }
      },
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {
              return found
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }
        let updateSource = result => {
          this.loadingItem = {}
          let sourceCopy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(sourceCopy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', sourceCopy)
        }
        if (!lastItem.isLeaf && this.loadData) {
          this.loadData(lastItem, updateSource)
          this.loadingItem = lastItem
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .cascader {
    display: inline-block;
    .trigger {
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: 32px;
      min-width: 10em;
    }
    .popover {
      /*display: flex;*/
      /*justify-items: flex-start;*/
      /*align-items: flex-start;*/
      position: absolute;
      /*border: 1px solid #000;*/
      background-color: #fff;
      @extend .box-shadow;
      z-index: 1;
    }
  }
</style>