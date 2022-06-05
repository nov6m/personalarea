import { createStore } from 'vuex'

export default createStore({
  state: {
    hasLogin: false,
    user: {
      name: 'Виктор',
      surname: 'Корнеплод',
      dateOfBirth: '19.01.2001',
      city: 'Moscow'
    }
  },
  getters: {
    getHasLogin: (state) => {
      return state.hasLogin
    },
    getUser: (state) => {
      return state.user
    },
    getFullNameUser: (state) => {
      return state.user.name + ' ' + state.user.surname
    }
  },
  mutations: {
    SIGHINOUT: (state) => {
      state.hasLogin = !state.hasLogin
    }
  },
  actions: {
  },
  modules: {
  }
})
