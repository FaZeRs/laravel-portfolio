import {
  SettingsService
} from '~/common/api.service'
import {
  FETCH_SETTINGS
} from './actions.type'
import {
  SET_SETTINGS
} from './mutations.type'

export const state = {
  settings: [],
}

export const actions = {
  async [FETCH_SETTINGS] (context, params) {
    try {
      const { data } = await SettingsService.query(params)

      context.commit(SET_SETTINGS, { settings: data })
    } catch (e) {

    }

    // return SettingsService.query(params)
    //   .then(({ data }) => {
    //     //data = JSON.parse(JSON.stringify(data));
    //     //console.log(data);
    //     context.commit(SET_SETTINGS, data)
    //     return data
    //   })
    //   .catch(error => {
    //     throw new Error(error)
    //   })
  }
}

export const mutations = {
  [SET_SETTINGS] (state, { settings }) {
    state.settings = settings
  }
}

export const getters = {
  settings: state => state.settings,
}

export default {
  state,
  actions,
  mutations,
  getters
}
