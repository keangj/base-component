<template>
  <div class="b-row"
       :class="rowClass"
       :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'b-row',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator (value) {
          return ['left', 'right', 'center'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      rowClass () {
        let {align} = this
        return [align && `align-${align}`]
      },
      rowStyle () {
        let {gutter} = this
        return {
          'margin-left': -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
.b-row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>