import axios from 'axios'
import Cookies from 'js-cookie'
import { loadMessages } from '~/plugins/i18n'

const { locale, locales } = window.config

export const state = {
  locale: Cookies.get('locale') || locale,
  locales: locales
}

export const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

export const actions = {
  changeLocale ({ commit }, locale) {
    axios.defaults.headers.common['Content-Language'] = locale
    loadMessages(locale)
    Cookies.set('locale', locale, { expires: 365 });
    commit('setLocale', locale)
  }
}

export const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
