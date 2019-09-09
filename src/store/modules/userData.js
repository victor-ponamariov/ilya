import axios from '@/axios'

export default {
  state: {
    userInfo: {},
    token: '', 
  },

  getters: {
    getUserInfo(state) {
      return state.userInfo
    },

    getToken(state) {
      return state.token
    }
  },

  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

    setToken(state,token) {
      state.token = token
    }
  },

  actions: {
    getUserData(context, res) {

      const Info = res.data.user
      const access_token = res.data.access_token

      context.commit('setUserInfo', Info)
      context.commit('setToken', access_token)
    }
  },
}