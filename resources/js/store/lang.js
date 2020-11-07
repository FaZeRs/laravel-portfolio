import { loadMessages } from '~/plugins/i18n'

const { locale, locales } = window.config

// state
export const state = {
  locale: localStorage.getItem('locale') || locale,
  locales: locales
}

// getters
export const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

// mutations
export const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  }
}

// actions
export const actions = {
  async changeLocale ({ commit }, payload) {
    localStorage.setItem('locale', payload);
    loadMessages(payload)
    commit('setLocale', payload)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
