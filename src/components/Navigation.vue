<template>
  <header>
    <div class="logo"></div>
    <nav>
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link class="nav-link" to="/login" v-if="isLoggedIn">Logout</router-link>
      <router-link class="nav-link" to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters['isLoggedIn']
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #afeaf1;
  }

  .logo {
    height: 100px;
    width: 100px;
    background-image: url(http://lurkmore.so/images/9/9b/Doge-top.png);
    background-size: cover;
    margin-left: 25px;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50px;
    margin-right: 40px;
    font-size: 20px;
    text-decoration: none;
    color: black;
  }

  .nav-link:hover {
    color: blueviolet;
  }
</style>