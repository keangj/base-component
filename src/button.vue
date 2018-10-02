<template>
  <button class="b-button">按钮</button>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.b-button {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0 1em;
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color);
  }
  &:active {
  background-color: var(--button-active-bg);
  }
  &:focus {
     outline: none;
  }
}
</style>
