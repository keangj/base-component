<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-item",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String|Number,
        required: true
      }
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      })
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  $color: rgb(24, 144, 255);
  .tabs-item {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 100%;
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 1em;
    }
    &.active {
      color: $color;
      fill: $color;
    }
  }
</style>