<template>
  <div class="collapse-item">
    <div class="title" @click="expand = !expand">
      {{title}}
    </div>
    <div class="content" v-if="expand">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-collapse-item',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        expand: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse-item {
    > :first-child {
    }
    .title {
      display: flex;
      align-items: center;
      border: 1px solid $border-color;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      padding: 0 12px;
      cursor: pointer;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        margin-bottom: -1px;
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    .content {
      padding: 12px;
    }
  }
</style>