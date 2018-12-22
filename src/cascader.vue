<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">

    </div>
    <div class="popover" v-if="popoverVisible">
      <Cascader-item :items="source" :height="popoverHeight"></Cascader-item>
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
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .cascader {
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
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