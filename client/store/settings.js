export const state = () => ({
  settings: {
    app_name: null,
    name: null,
    photo: null,
    about_you: null,
    contact_email: null,
    profession: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    github: null,
    gitlab: null,
    bitbucket: null,
  },
})

export const actions = {
  async fetchSettings ({ commit }) {
    try {
      const settings = await this.$axios.get('/settings')
      commit('setSettings', settings.data)
    } catch (error) {
      throw error
    }
  },
  async update ({ commit, dispatch }, payload) {
    try {
      if (payload.hasOwnProperty('photo')) {
        dispatch('uploadPhoto', payload)
        payload['photo'] = null
      }
      const settings = await this.$axios.put('/settings', payload)
      commit('setSettings', settings.data)
    } catch (error) {
      throw error
    }
  },
  async uploadPhoto({}, payload) {
    try {
      let data = new FormData();
      data.append('photo', payload.photo)
      return await this.$axios.post('/settings/upload-photo', data)
    } catch (error) {
      throw error
    }
  },
}

export const mutations = {
  setSettings (state, settings) {
    state.settings = settings
  }
}

export const getters = {
  settings: state => state.settings,
}
