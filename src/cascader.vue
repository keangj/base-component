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
      onUpdateSelected (x) {
        this.$emit('update:selected', x)
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