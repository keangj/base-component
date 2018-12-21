<template>
  <div class="cascader">
    <div class="trigger">

    </div>
    <div class="popover" v-for="item in source">
      <Cascader-item :source-item="item"></Cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item'
  export default {
    name: 'b-cascader',
    components: {CascaderItem},
    props: {
      source: {
        type: Array
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

  .cascader {
    .trigger {
      border: 1px solid red;
    }
    .popover {

    }
  }
</style>