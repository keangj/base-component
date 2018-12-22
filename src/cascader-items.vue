<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <b-cascader-items :items="rightItems" :height="height"></b-cascader-items>
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
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems () {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    },
    mounted () {
      // console.log(this.sourceItem)
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
      /*border: 1px solid blue;*/
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
      .icon {
        margin-left: .5em;
        transform: scale(.8);
      }
    }
  }
</style>