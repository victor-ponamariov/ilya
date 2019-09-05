<template>
  <input type="email"  v-model="login" placeholder="login">
</template>

<script>
export default {
  name: 'input-login',
  data() {
    return {
      login: ''
    }
  }
}
</script>

<style lang="scss">

</style>