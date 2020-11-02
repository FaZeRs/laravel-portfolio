import Vue from 'vue'
import Cookies from 'js-cookie'
import { loadMessages } from '~/plugins/i18n'

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
  setLocale (state, locale) {
    state.locale = locale
  }
}

// actions
export const actions = {
  async changeLocale ({ commit }) {
    Vue.axios.defaults.headers.common['Content-Language'] = locale
    loadMessages(locale)
    Cookies.set('locale', locale, { expires: 365 });
    commit('setLocale', locale)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
