import Education from "~/models/Education";

export const state = () => ({
  education: [],
})

export const actions = {
  async fetchEducation ({ commit }) {
    const education = await Education.get()
    commit('setEducation', education)
    return education
  }
}

export const mutations = {
  setEducation (state, education) {
    state.education = education
  }
}

export const getters = {
  education (state) {
    return state.education
  },
}
