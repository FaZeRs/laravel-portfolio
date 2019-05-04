import Cookies from 'js-cookie'
import {
  SET_LOCALE
} from './mutations.type'

const { locale, locales } = window.config

// state
export const state = {
  locale: Cookies.get('locale') || locale,
  locales: locales
}

// getters
export const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

// mutations
export const mutations = {
  [SET_LOCALE] (state, { locale }) {
    state.locale = locale
  }
}

// actions
export const actions = {
  setLocale ({ commit }, { locale }) {
    commit(SET_LOCALE, { locale })

    Cookies.set('locale', locale, { expires: 365 })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
