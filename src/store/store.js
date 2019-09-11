import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule'
import cryptoModule from './modules/cryptoModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    cryptoModule
  }
})