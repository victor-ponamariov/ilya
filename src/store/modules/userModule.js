import axios from '@/axios'

export default {
  namespaced: true,

  state: {
    currentUser: {},
    token: '', 
  },

  getters: {
    userInfo(state) {
      return state.currentUser
    },

    isLoggedIn(state) {
      return state.currentUser
    }
  },

  mutations: {
    setUserInfo(state, userData) {
      state.currentUser = userData
    },

    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', state.token)

    },

    logout(state) {
      state.currentUser = {}
      state.token = ''
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
    },

    async logout({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
    }
  },
}