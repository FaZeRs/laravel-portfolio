import Project from "../models/Project";

export const state = {
  projects: [],
}

export const actions = {}

export const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  }
}

export const getters = {
  projects (state) {
    return state.projects
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
