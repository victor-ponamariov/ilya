<template>
  <div class="app">
    <div class="crypto-info" v-for="crypto in allCryptos" :key="crypto.id">
      <h1>{{ crypto.id }} / {{ crypto.symbol }}</h1>
      <h2>{{ crypto.priceUsd }} USD</h2>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    allCryptos() {
      return this.$store.getters.allCryptos
    },
  },

  async mounted() {
    this.$store.dispatch('getCryptocurrency');
  }
}
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    font-size: 10px;
    h2 {
      font-size: 10px;
    }
  }

  .crypto-info {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    width: 500px;
    height: 300px;
    margin: 20px;
    background: #afeaf1;
  }

  .crypto-info:hover {
    border: 1px solid blueviolet;
  }
</style>