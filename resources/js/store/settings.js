import http from '~/plugins/axios';

export const state = {
  settings: {
    app_name: null,
    name: null,
    photo: null,
    about_you: null,
    profession: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    github: null,
    gitlab: null,
    bitbucket: null,
  },
}

export const actions = {
  async fetchSettings ({ commit }) {
    try {
      const settings = await http.get('/settings')
      commit('setSettings', settings.data)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const mutations = {
  setSettings (state, settings) {
    state.settings = settings
  }
}

export const getters = {
  settings: state => state.settings,
}

export default {
  state,
  actions,
  mutations,
  getters
}
