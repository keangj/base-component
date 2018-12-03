<template>
  <div class="tabs-pane" v-if="active" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "b-tabs-pane",
    inject: ['eventBus'],
    props: {
      name: {
        type: [String, Number],
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
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      /*background-color: #eee;*/
    }
  }
</style>