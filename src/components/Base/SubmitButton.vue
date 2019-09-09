<template>
  <button type="submit" @click.prevent="$emit('click')">{{ text }}</button>
</template>

<script>
  import axios from '@/axios.js'


  export default {
    props: {
      text: {
        type: String,
        required: true
      } 
    }
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