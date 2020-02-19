import ExperienceService from '~/services/experience.service'

export const state = {
  experience: []
}

export const getters = {
  experience: state => state.experience
}

export const actions = {
  fetchAll ({ commit }, params) {
    return ExperienceService.all(params)
      .then(({ data }) => {
        commit('setExperience', data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  setExperience (state, experience) {
    state.experience = experience
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
