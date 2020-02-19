import { UserService, AuthenticationError } from '~/services/user.service'
import { TokenService } from '~/services/storage.service'

export const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationSuccess: false,
  authenticationErrorCode: 0,
  authenticationError: '',
  user: {},
}

export const getters = {
  loggedIn: (state) => {
    return state.accessToken ? true : false
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode
  },

  authenticationError(state) {
    return state.authenticationError
  },

  authenticationSuccess(state) {
    return state.authenticationSuccess
  },

  authenticating: (state) => {
    return state.authenticating
  },

  user: (state) => {
    return state.user
  },
}

export const actions = {
  async login ({ commit }, {email, password}) {
    commit('loginRequest');
    try {
      const data = await UserService.login(email, password)
      commit('setUserInfo', data.user)
      commit('loginSuccess', data.token)
    } catch (error) {
      // todo : test
      if (error instanceof AuthenticationError) {
        commit('loginError', {errorCode: error.errorCode, errorMessage: error.message})
      }
      throw new Error(error)
    }
  },
  async logout({ commit }) {
    await UserService.logout()
    commit('logoutSuccess')
  },
}

export const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken
    state.authenticationSuccess = true;
    state.authenticating = false;
  },

  loginError(state, {errorCode, errorMessage}) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
  },

  setUserInfo(state, user) {
    state.user = user
  },

  logoutSuccess(state) {
    state.accessToken = ''
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
