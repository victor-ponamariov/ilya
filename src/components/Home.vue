<template>
  <div id="app">
    <navigation/>
    <main-content/>
  </div>
</template>

<script>
import Navigation from './Navigation'
import MainContent from './Content'

export default {
  components: {
    Navigation,
    MainContent
  },

}
</script>

<style lang="scss" scoped>

</style>