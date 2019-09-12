<template>
  <form>
    <h1>Sign in</h1>
    <div class="inputs">
      <input type="email"  v-model="email" placeholder="email"/>
      <input type="password" v-model="password" placeholder="password"/>
    </div>
    <base-button type="submit" text="Login" @click="auth"/>
  </form>
</template>

<script>
import BaseButton from './Base/BaseButton'

export default {
  components: {
    BaseButton
  },
  
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    auth() {
      let data = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('userModule/login', {data})
    },
  }
  
}
</script>

<style lang="scss" scoped>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 500px;
    border-radius: 4px;
    background-color: #afeaf1;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
  }

  input {
    height: 30px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid blueviolet;
    background-color: #afeaf1;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid white;
  }
</style>
