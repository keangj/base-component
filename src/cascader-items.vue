<template>
  <div class="cascader-item">
    <div class="left">
      <div v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <b-cascader-items :items="rightItems"></b-cascader-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-cascader-items',
    props: {
      items: {
        type: Array
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
  .cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      border: 1px solid blue;
    }
    .right {
      margin-top: -1px;
    }
  }
</style>