<template>
  <div class="app">
    <navigation/>
    <div class="container">
      <formAuth/>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import FormAuth from './FormAuth'

export default {
  components: {
    Navigation,
    FormAuth
  }
}
</script>

<style lang="scss" scoped>

 div.app {
    height: calc(100vh - 16px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    // height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  formAuth {
    align-self: center;
  }

</style>