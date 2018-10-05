<template>
  <button
    class="b-button"
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <b-icon
      v-if="icon && !loading"
      class="icon"
      :name="icon"
    ></b-icon>
    <b-icon
      v-if="loading"
      class="loading icon"
      name="loading"
    ></b-icon>
    <div class="b-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    components: {
      'b-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          // 这个值必须匹配下列字符串中的一个
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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
      border-color: var(--border-color-hover);
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
      .loading {
        animation: spin .8s infinite linear;
      }
    }
    .loading {
      animation: spin .8s infinite linear;
    }
  }
</style>
