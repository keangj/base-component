<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{selectedText || '&nbsp;'}}
    </div>
    <div class="popover" v-if="popoverVisible">
      <Cascader-item
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></Cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-items'
  export default {
    name: 'b-cascader',
    components: {CascaderItem},
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
        popoverVisible: false
      }
    },
    computed: {
      selectedText () {
        return this.selected.map(item => item.name).join('/')
      }
    },
    methods: {
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
          let sourceCopy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(sourceCopy, lastItem.id)
          // if (result.length>0){

          toUpdate.children = result
          // }
          // this.$set(toUpdate, 'children', result)
          this.$emit('update:source', sourceCopy)
        }

        this.loadData(lastItem, updateSource)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .cascader {
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
    }
  }
</style>