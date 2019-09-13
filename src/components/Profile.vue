<template>
  <div class="app">
    <navigation/>
    <div class="container">
      <div class="profile-info">
        <div class="profile-pic"></div>
        <h1>{{ userInfo.person.full_name }}</h1>
        <h2>{{ userInfo.person.email }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  components: {
    Navigation
  },

  computed: {
    userInfo() {
      return this.$store.getters['userModule/userInfo']
    },
    isLoggedIn() {
      return this.$store.getters['isLoggedIn']
    }
  },

  beforeMount() {
    if (!this.isLoggedIn) {
      this.$router.replase('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile-pic {
    display: block;
    height: 100px;
    width: 100px;
    background-image: url(https://cdn.britannica.com/50/160750-050-36D9A41C/Nikolay-Gogol-print.jpg);
    background-size: cover;
  }
</style>