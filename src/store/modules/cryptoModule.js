import axios from '@/axios'

export default {
  namespaced: true,

  state: {
    coins: [],
  },
  
  getters: {
    allCoins(state) {
      return state.coins
    }
  },

  mutations: {
    setCryprocurrency(state, coinsInfo) {
      state.coins = coinsInfo
    }
  },

  actions: {
    async getCryptocurrency({ commit }) {
      await axios({
        url: '/v2/assets',
        baseURL: 'https://api.coincap.io'
      })
      .then(res => commit('setCryprocurrency', res.data.data))
      .catch(err => console.error('Error', err))
    }
  },
}