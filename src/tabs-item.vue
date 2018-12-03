<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      })
    },
    methods: {
      onClick () {
        if (!this.disabled) {
          this.eventBus.$emit('update:selected', this.name, this)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  $color: rgb(24, 144, 255);
  $disabled-color: #ccc;
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
    &.disabled {
      color: $disabled-color;
      fill: $disabled-color;
      cursor: no-drop;
    }
  }
</style>