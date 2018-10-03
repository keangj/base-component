<template>
  <button class="b-button" :class="{[`icon-${iconPosition}`]: true}">
    <b-icon class="icon" :name="icon"></b-icon>
    <div class="b-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        default: 'left'
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .b-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0 1.2em;
    font-size: var(--font-size);
    height: var(--button-height);
    line-height: var(--button-height);
    background: var(--button-bg);
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
    > .b-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .2em;
    }

    &.icon-right {
      > .b-button-content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }
    }
  }
</style>
