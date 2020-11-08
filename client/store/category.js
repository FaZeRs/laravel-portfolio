import Category from "~/models/Category";

export const state = () => ({
  categories: [],
})

export const actions = {
  async fetchCategories({commit}) {
    try {
      const categories = await Category.where('active', true).include('projects').get()
      commit('setCategories', categories)
      return categories
    } catch (error) {
      throw error
    }
  },
  async fetchAdminCategories({commit}, payload) {
    try {
      let categories = new Category
      const { sortBy, sortDesc, page, itemsPerPage } = payload
      if(page) {
        categories.page(page)
      }
      if(itemsPerPage) {
        categories.limit(itemsPerPage)
      }
      if (sortBy.length === 1 && sortDesc.length === 1) {
        let column = sortBy[0]
        const desc = sortDesc[0]
        if(desc) {
          column = '-' + column
        }
        categories.orderBy(column)
      }
      let result = await categories.get()

      commit('setCategories', result.data)
      return result
    } catch (error) {
      throw error
    }
  },
  async updateCategory({}, payload) {
    try {
      const category = await Category.find(payload.id)
      if (payload.title) {
        category.title = payload.title
      }
      if (payload.active) {
        category.active = payload.active
      }
      return await category.save()
    } catch (error) {
      throw error
    }
  },
  async createCategory({}, payload) {
    try {
      const category = new Category(payload)
      return await category.save()
    } catch (error) {
      throw error
    }
  },
  async deleteCategory({}, payload) {
    try {
      const category = await Category.find(payload.id)
      return await category.delete()
    } catch (error) {
      throw error
    }
  }
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const getters = {
  categories(state) {
    return state.categories
  },
}
