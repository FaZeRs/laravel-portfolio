import ProjectsService from '~/services/projects.service'
import CategoriesService from '~/services/categories.service'

export const state = {
  categories: [],
  projects: []
}

export const getters = {
  projects: state => state.projects,
  categories: state => state.categories
}

export const actions = {
  fetchProjects ({ commit }, params) {
    return ProjectsService.all(params)
      .then(({ data }) => {
        commit('setProjects', data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  fetchCategories ({ commit }, params) {
    return CategoriesService.all(params)
      .then(({ data }) => {
        commit('setCategories', data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  },
  setCategories (state, categories) {
    state.categories = categories
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
