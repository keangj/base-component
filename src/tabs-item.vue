<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-head-item",
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
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    display: flex;
    /*align-items: center;*/
    flex-shrink: 0;
    padding: 0 2em;
    &.active {
      background-color: #eee;
    }
  }
</style>