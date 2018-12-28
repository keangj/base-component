<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <b-cascader-items
        :level="level + 1"
        :items="rightItems"
        :height="height"
        :selected="selected"
        :load-data="loadData"
        @update:selected="onUpdateSelected"
      ></b-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'b-cascader-items',
    components: {Icon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function
      },
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      rightItems () {
        if (this.selected[this.level]) {
          let selected = this.items.filter(item => item.name === this.selected[this.level].name)[0]
          if (selected && selected.children) {
            return selected.children
          }
        }
      }
    },
    methods: {
      rightArrowVisible (item) {
        return this.loadData ? !item.isLeaf : item.children
      },
      onClickLabel (item) {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        selectedCopy[this.level] = item
        selectedCopy.splice(this.level + 1)
        this.$emit('update:selected', selectedCopy)
      },
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      overflow: auto;
      padding-top: .3em;
      height: 100%;
    }
    .right {
      // margin-top: -1px;
      border-left: 1px solid $border-color;
      height: 100%;
    }
    .label {
      display: flex;
      align-items: center;
      padding: .3em 1em;
      cursor: pointer;
      &:hover {
        background-color: $gray;
      }
      > .name {
        margin-right: .5em;
      }
      .icon {
        margin-left: auto;
        transform: scale(.8);
      }
    }
  }
</style>