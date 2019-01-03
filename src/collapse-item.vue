<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{title}} {{accordion}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-collapse-item',
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String
      }
    },
    data () {
      return {
        open: false,
        accordion: false
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (names) => {
        this.open = names.indexOf(this.name) !== -1;
      })
    },
    methods: {
      toggle () {
        if (this.open) {
          this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";

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