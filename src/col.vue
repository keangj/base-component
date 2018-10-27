<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <div style="background-color: #eee;border: 1px solid #aaa;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if(!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'b-col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      xs: {type: [Number, Object], validator},
      sm: {type: [Number, Object], validator},
      md: {type: [Number, Object], validator},
      lg: {type: [Number, Object], validator},
      xl: {type: [Number, Object], validator},
      xxl: {type: [Number, Object], validator}
    },
    data () {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass () {
        let {span, offset, xs, sm, md, lg, xl, xxl} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(xs && [`col-xs-${xs.span}`]),
          ...(sm && [`col-sm-${sm.span}`]),
          // ...(md && [`col-md-${md.span}`]),
          // ...(lg && [`col-lg-${lg.span}`]),
          // ...(xl && [`col-xl-${xl.span}`]),
          // ...(xxl && [`col-xxl-${xxl.span}`])
        ]
      },
      colStyle () {
        let {gutter} = this
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.col {
  // scss for 循环
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: $n / 24 * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }
  
  @media (max-width: 576px) {
    $class-prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    $class-prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }

  @media (min-width: 1600px) {
    $class-prefix: col-xxl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: offset-xxl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
}
</style>