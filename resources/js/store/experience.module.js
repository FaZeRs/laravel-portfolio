import {
  ExperienceService
} from '~/common/api.service'
import {
  FETCH_EXPERIENCE
} from './actions.type'
import {
  SET_EXPERIENCE,
} from './mutations.type'

export const state = {
  experience: [],
}

export const actions = {
  [FETCH_EXPERIENCE] (context, params) {
    return ExperienceService.query(params)
      .then(({ data }) => {
        context.commit(SET_EXPERIENCE, data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  [SET_EXPERIENCE] (state, experience) {
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
