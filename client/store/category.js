import Category from "~/models/Category";

export const state = () => ({
  categories: [],
})

export const actions = {
  async fetchCategories ({ commit }) {
    try {
      const categories = await Category.include('projects').get()
      commit('setCategories', categories)
      return categories
    } catch(error) {
      throw error
    }
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
