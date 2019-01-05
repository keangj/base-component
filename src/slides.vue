<template>
  <div class="b-slides">
    <div class="b-slides-window">
      <slot></slot>
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
    mounted () {
      this.updateSelected()
      this.playAutomatically()
    },
    updated () {
      this.updateSelected()
    },
    methods: {
      playAutomatically () {
        const names = this.$children.map(child => child.name)
        let index = names.indexOf(this.getSelected())
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
          if (newIndex === -1) { newIndex = names.length - 1}
          if (newIndex === names.length) { newIndex = 0 }
          this.$emit('update:selected', names[newIndex])
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
          const names = this.$children.map(child => child.name)
          let oldIndex = names.indexOf(child.name)
          let newIndex = names.indexOf(selected)
          child.reverse = newIndex <= oldIndex
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-slides {
    display: inline-block;
    .b-slides-window {
      overflow: hidden;
      position: relative;
    }
  }
</style>