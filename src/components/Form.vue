<template>
  <form action="">
    <h1>Authorization</h1>
    <div class="inputs">
      <input type="email"  v-model="email" placeholder="email"/>
      <input type="password" v-model="password" placeholder="password"/>
    </div>
    <submit-button text="Submit" @click="sendUserData"/>
  </form>
</template>

<script>
import axios from '@/axios'
import SubmitButton from './Base/SubmitButton.vue'

export default {
  components: {
    SubmitButton
  },
  
  data() {
    return {
      email: '',
      password: '',
      token: ''
    }
  },

  methods: {
    sendUserData() {
        const respone = await axios.post('auth/login', {
          email: this.email,
          password: this.password,
          module: 'koin',
        })
        .then(token => {
          token => localStorage.setItem('token', token)
        })
      }
    
    }
  
}
</script>

<style lang="scss">
  * {
    font-family: sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    border-radius: 4px;
    background-color: #afeaf1;
    max-width: 600px;
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