<template>
  <div class="b-slides">
    <div class="b-slides-window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span
        v-for="n in childrenLength"
        :class="{active: selectIndex === n-1}"
        @click="select(n-1)"
      >
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'b-slides',
    props: {
      selected: String,
      autoPlay: Boolean
    },
    data () {
      return {
        childrenLength: 0
      }
    },
    computed: {
      names () {
        return this.$children.map(child => child.name)
      },
      selectIndex () {
        return this.names.indexOf(this.selected) || 0
      }
    },
    mounted () {
      this.updateSelected()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated () {
      this.updateSelected()
    },
    methods: {
      playAutomatically () {
        let index = this.names.indexOf(this.getSelected())
        // let run = () => {
        //   if (index === names.length) {
        //     index = 0
        //   }
        //   this.$emit('update:selected', names[index + 1])
        //   index++
        //   setTimeout(run, 3000)
        // }
        let run = () => {
          let newIndex = index - 1
          if (newIndex === -1) { newIndex = this.names.length - 1}
          if (newIndex === this.names.length) { newIndex = 0 }
          this.$emit('update:selected', this.names[newIndex])
          // index--
          setTimeout(run, 3000)
        }
        setTimeout(run, 3000)
      },
      getSelected () {
        return this.selected || this.$children[0].name
      },
      updateSelected () {
        let selected = this.getSelected()
        this.$children.forEach(child => {
          child.selected = selected
          let oldIndex = this.names.indexOf(child.name)
          let newIndex = this.names.indexOf(selected)
          child.reverse = newIndex <= oldIndex
        })
      },
      select (index) {
        this.$emit('update:selected', this.names[index])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-slides {
    /*display: inline-block;*/
    &-window {
      overflow: hidden;
    }
    &-wrapper {
      position: relative;
    }
    &-dots {
      > .active {
        background-color: #6a8bad;
      }
    }
  }
</style>