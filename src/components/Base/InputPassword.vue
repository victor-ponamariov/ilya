<template>
  <input type="password" value="password" v-model="password" placeholder="password">
</template>

<script>
export default {
  name: 'input-password',
  data() {
    return {
      password: ''
    }
  }
}
</script>

<style lang="scss">

</style>