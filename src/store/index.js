import { createStore } from 'vuex'
import AuthService from '../api/AuthService'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_success (state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    login ({ commit }, user) {
      AuthService.signIn(user.email, user.password)
        .then((res) => {
          const token = res.token
          const user = res.user

          localStorage.setItem('token', res.token)
          commit('auth_success', { token, user })
        })
        .catch((e) => {
          commit('auth_error', e)
          localStorage.removeItem('token')
        })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
