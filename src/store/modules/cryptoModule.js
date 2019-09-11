import axios from '@/axios'

export default {
  state: {
    cryptos: [],
  },
  
  getters: {
    allCryptos(state) {
      return state.cryptos
    }
  },

  mutations: {
    setCryprocurrency(state, cryptos) {
      state.cryptos = cryptos
    }
  },

  actions: {
    async getCryptocurrency({ commit }) {
      this.$axios.defaults.baseURL = "https://api.coincap.io"
      await this.$axios('/v2/assets')
      .then(res => commit('setCryprocurrency', res.data.data))
      .catch(err => console.error('Error', err))
    }
  },
}