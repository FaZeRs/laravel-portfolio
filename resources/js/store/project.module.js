import {
  ProjectsService,
  CategoriesService
} from '~/common/api.service'
import {
  FETCH_PROJECTS,
  FETCH_CATEGORIES
} from './actions.type'
import {
  SET_PROJECTS,
  SET_CATEGORIES
} from './mutations.type'

export const state = {
  categories: [],
  projects: []
}

export const actions = {
  [FETCH_PROJECTS] (context, params) {
    return ProjectsService.query(params)
      .then(({ data }) => {
        context.commit(SET_PROJECTS, data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  [FETCH_CATEGORIES] (context, params) {
    return CategoriesService.query(params)
      .then(({ data }) => {
        context.commit(SET_CATEGORIES, data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  [SET_PROJECTS] (state, projects) {
    state.projects = projects
  },
  [SET_CATEGORIES] (state, categories) {
    state.categories = categories
  }
}

export const getters = {
  projects (state) {
    return state.projects
  },
  categories (state) {
    return state.categories
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
