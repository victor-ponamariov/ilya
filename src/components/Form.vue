<template>
  <form action="">
    <input-login/>
    <input-password/>
  </form>
</template>

<script>
import InputLogin from './Base/InputLogin.vue'
import InputPassword from './Base/InputPassword.vue'

export default {
  components: {
    'input-login': InputLogin,
    'input-password': InputPassword
    },
  name: 'auth-form'
}
</script>

<style lang="scss">
  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    border: 1px solid #000;
    background-color: hsl(165, 59%, 74%);
  }
</style>