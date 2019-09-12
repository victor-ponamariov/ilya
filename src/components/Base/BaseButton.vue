<template>
  <button @click.prevent="$emit('click')"><slot></slot></button>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  button {
    height: 30px;
    width: 80px;
    box-shadow: none;
    border: none;
    border-radius: 5px;
    background-color: #c9f3f8;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
  }

  button:focus {
    outline: none;
  }

  button:active {
    background: #93bec4;
  }
</style>