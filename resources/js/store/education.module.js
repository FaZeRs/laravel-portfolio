import EducationService from '~/services/education.service'

export const state = {
  education: []
}

export const getters = {
  education: state => state.education
}

export const actions = {
  fetchAll ({ commit }, params) {
    return EducationService.all(params)
      .then(({ data }) => {
        commit('setEducation', data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  setEducation(state, education) {
    state.education = education
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
