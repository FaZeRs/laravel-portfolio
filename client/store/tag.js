import Tag from "~/models/Tag";

export const state = () => ({
  tags: [],
})

export const actions = {
  async fetchAdminTags({commit}, payload) {
    try {
      let tag = new Tag
      const { sortBy, sortDesc, page, itemsPerPage } = payload
      if(page) {
        tag.page(page)
      }
      if(itemsPerPage) {
        tag.limit(itemsPerPage)
      }
      if (sortBy && sortBy.length === 1 && sortDesc && sortDesc.length === 1) {
        let column = sortBy[0]
        const desc = sortDesc[0]
        if(desc) {
          column = '-' + column
        }
        tag.orderBy(column)
      }
      return await tag.get()
    } catch (error) {
      throw error
    }
  },
  async updateTag({}, payload) {
    try {
      const tag = await Tag.find(payload.id)
      if (payload.hasOwnProperty('title')) {
        tag.title = payload.title
      }
      if (payload.hasOwnProperty('color')) {
        tag.color = payload.color
      }
      if (payload.hasOwnProperty('active')) {
        tag.active = payload.active
      }
      return await tag.save()
    } catch (error) {
      throw error
    }
  },
  async createTag({}, payload) {
    try {
      const tag = new Tag(payload)
      return await tag.save()
    } catch (error) {
      throw error
    }
  },
  async deleteTag({}, payload) {
    try {
      const tag = await Tag.find(payload.id)
      return await tag.delete()
    } catch (error) {
      throw error
    }
  }
}

export const mutations = {
  setTags (state, tags) {
    state.tags = tags
  }
}

export const getters = {
  tags (state) {
    return state.tags
  },
}
