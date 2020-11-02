import Category from "../models/Category";

export const state = {
  categories: [],
}

export const actions = {
  async fetchCategories ({ commit }) {
    const categories = await Category.include('projects').get()
    commit('setCategories', categories)
    return categories
  }
}

export const mutations = {
  setCategories (state, categories) {
    state.categories = categories
  }
}

export const getters = {
  categories (state) {
    return state.categories
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
