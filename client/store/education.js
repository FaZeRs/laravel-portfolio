import Education from "~/models/Education";

export const state = () => ({
  education: [],
})

export const actions = {
  async fetchEducation ({ commit }) {
    const education = await Education.get()
    commit('setEducation', education)
    return education
  },
  async fetchAdminEducation({commit}, payload) {
    try {
      let education = new Education
      const { sortBy, sortDesc, page, itemsPerPage } = payload
      if(page) {
        education.page(page)
      }
      if(itemsPerPage) {
        education.limit(itemsPerPage)
      }
      if (sortBy && sortBy.length === 1 && sortDesc && sortDesc.length === 1) {
        let column = sortBy[0]
        const desc = sortDesc[0]
        if(desc) {
          column = '-' + column
        }
        education.orderBy(column)
      }
      return await education.get()
    } catch (error) {
      throw error
    }
  },
  async updateEducation({}, payload) {
    try {
      const education = await Education.find(payload.id)
      if (payload.hasOwnProperty('qualification')) {
        education.qualification = payload.qualification
      }
      if (payload.hasOwnProperty('organisation')) {
        education.organisation = payload.organisation
      }
      if (payload.hasOwnProperty('date_from')) {
        education.date_from = payload.date_from
      }
      if (payload.hasOwnProperty('date_to')) {
        education.date_to = payload.date_to
      }
      if (payload.hasOwnProperty('ongoing')) {
        education.ongoing = payload.ongoing
      }
      if (payload.hasOwnProperty('active')) {
        education.active = payload.active
      }
      return await education.save()
    } catch (error) {
      throw error
    }
  },
  async createEducation({}, payload) {
    try {
      const education = new Education(payload)
      return await education.save()
    } catch (error) {
      throw error
    }
  },
  async deleteEducation({}, payload) {
    try {
      const education = await Education.find(payload.id)
      return await education.delete()
    } catch (error) {
      throw error
    }
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
