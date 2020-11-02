import Experience from "../models/Experience";

export const state = {
  experience: [],
}

export const actions = {
  async fetchExperience ({ commit }) {
    const experience = await Experience.get()
    commit('setExperience', experience)
  }
}

export const mutations = {
  setExperience (state, experience) {
    state.experience = experience
  }
}

export const getters = {
  experience (state) {
    return state.experience
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
