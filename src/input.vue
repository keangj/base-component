<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      type="text"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'b-input',
    components: {
      Icon: Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $font-size: 12px;
  $red: #ed4014;
  .wrapper {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    font-size: $font-size;
    :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 9px 8px;
      height: $height;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 0 1px .3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #aaa;
        background-color: #EBEEF5;
        color: #aaa;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
        &:focus {
          box-shadow: inset 0 0 1px .3px $red;
        }
      }
      .icon-error {
        fill: $red;
      }
      .error-message {
        color: $red;
      }
    }
  }
</style>