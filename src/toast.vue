<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'b-toast'
  }
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 .5em;
  min-height: 40px;
  color: #fff;
  background: rgba(0,0,0,0.74);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
}
</style>