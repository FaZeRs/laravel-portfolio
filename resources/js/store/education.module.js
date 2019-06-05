import {
  EducationService
} from '~/common/api.service'
import {
  FETCH_EDUCATION
} from './actions.type'
import {
  SET_EDUCATION
} from './mutations.type'

export const state = {
  education: [],
}

export const actions = {
  [FETCH_EDUCATION] (context, params) {
    return EducationService.query(params)
      .then(({ data }) => {
        context.commit(SET_EDUCATION, data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export const mutations = {
  [SET_EDUCATION] (state, education) {
    state.education = education
  }
}

export const getters = {
  education (state) {
    return state.education
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
