import Experience from "~/models/Experience";

export const state = () => ({
  experience: [],
})

export const actions = {
  async fetchExperience ({ commit }) {
    const experience = await Experience.include('media').get()
    commit('setExperience', experience)
    return experience
  },
  async fetchAdminExperience({commit}, payload) {
    try {
      let experience = Experience.include('media')
      const { sortBy, sortDesc, page, itemsPerPage } = payload
      if(page) {
        experience.page(page)
      }
      if(itemsPerPage) {
        experience.limit(itemsPerPage)
      }
      if (sortBy && sortBy.length === 1 && sortDesc && sortDesc.length === 1) {
        let column = sortBy[0]
        const desc = sortDesc[0]
        if(desc) {
          column = '-' + column
        }
        experience.orderBy(column)
      }
      return await experience.get()
    } catch (error) {
      throw error
    }
  },
  async updateExperience({dispatch}, payload) {
    try {
      const experience = await Experience.find(payload.id)
      if (payload.hasOwnProperty('position')) {
        experience.position = payload.position
      }
      if (payload.hasOwnProperty('employer')) {
        experience.employer = payload.employer
      }
      if (payload.hasOwnProperty('website')) {
        experience.website = payload.website
      }
      if (payload.hasOwnProperty('date_from')) {
        experience.date_from = payload.date_from
      }
      if (payload.hasOwnProperty('date_to')) {
        experience.date_to = payload.date_to
      }
      if (payload.hasOwnProperty('ongoing')) {
        experience.ongoing = payload.ongoing
      }
      if (payload.hasOwnProperty('active')) {
        experience.active = payload.active
      }
      if (payload.hasOwnProperty('image')) {
         dispatch('uploadLogo', payload)
      }
      return await experience.save()
    } catch (error) {
      throw error
    }
  },
  async createExperience({}, payload) {
    try {
      const experience = new Experience(payload)
      return await experience.save()
    } catch (error) {
      throw error
    }
  },
  async deleteExperience({}, payload) {
    try {
      const experience = await Experience.find(payload.id)
      return await experience.delete()
    } catch (error) {
      throw error
    }
  },
  async uploadLogo({}, payload) {
    try {
      let data = new FormData();
      data.append('image', payload.image)
      await this.$axios.post('/experience/' + payload.id + '/upload-logo', data)
    } catch (error) {
      throw error
    }
  },
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
