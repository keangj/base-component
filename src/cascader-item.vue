<template>
  <div>
    {{sourceItem.name}}
    <b-cascader-item
      v-for="item in sourceItem.children"
      v-if="sourceItem.children"
      :source-item="item"
    ></b-cascader-item>
  </div>
</template>

<script>
  export default {
    name: 'b-cascader-item',
    props: {
      sourceItem: {
        type: Object
      }
    },
    mounted () {
      // console.log(this.sourceItem)
    }
  }
</script>

<style lang="scss" scoped>

</style>