import { createStore } from 'vuex'

export default createStore({
  state: {
    hasLogin: false,
    user: {
      name: 'Виктор',
      surname: 'Корнеплод',
      dateOfBirth: '19.01.2001',
      city: 'Moscow'
    },
    tickets: [
      {
        header: 'Хочу подключить камеру',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 1
      },
      {
        header: 'Настройка камеры',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 2
      },
      {
        header: 'Замена оборудования',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 3
      },
      {
        header: 'Хочу подключить камеру',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 4
      },
      {
        header: 'Настройка камеры',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 5
      },
      {
        header: 'Настройка камеры',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 6
      },
      {
        header: 'Замена оборудования',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt 
        nobis suscipit eaque?`,
        id: 7
      }
    ]
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
    },
    getTickets: (state) => {
      return state.tickets
    }
  },
  mutations: {
    SIGHINOUT: (state) => {
      state.hasLogin = !state.hasLogin
    },
    EDITUSER: (state, payload) => {
      Object.assign(state.user, payload)
    },
    ADDTICKET: (state, payload) => {
      state.tickets = [...state.tickets, payload]
    }
  },
  actions: {
  },
  modules: {
  }
})
