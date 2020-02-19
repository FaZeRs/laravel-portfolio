import SettingsService from '~/services/settings.service'

export const state = {
  settings: []
}

export const getters = {
  settings: state => state.settings
}

export const actions = {
  async fetchAll ({ commit }, params) {
    try {
      const { data } = await SettingsService.all(params)

      commit('setSettings', { settings: data })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const mutations = {
  setSettings (state, { settings }) {
    state.settings = settings
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
