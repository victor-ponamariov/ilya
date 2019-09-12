import axios from '@/axios'

export default {
  namespaced: true,

  state: {
    currentUser: {},
    token: '', 
  },

  getters: {},

  mutations: {
    setUserInfo(state, userData) {
      state.currentUser = userData
    },

    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', state.token)

    }
  },

  actions: {
    async login({ commit }, user) {
      await axios.post('auth/login', {
        email: user.email,
        password: user.password,
        module: 'koin',
      }).then(({ data }) => {
        commit('setUserInfo', data.user)
        commit('setToken', data.access_token)
      }) 
    }
  },
}