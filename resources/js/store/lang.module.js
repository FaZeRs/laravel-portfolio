import Vue from 'vue'
import Cookies from 'js-cookie'
import { loadMessages } from '~/plugins/i18n'
import store from '~/store'
import {
  SET_LOCALE
} from './mutations.type'
import {
  CHANGE_LOCALE,
  FETCH_SETTINGS
} from "./actions.type";

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
  [SET_LOCALE] (state, locale) {
    state.locale = locale
  }
}

// actions
export const actions = {
  [CHANGE_LOCALE] (context, locale) {
    Vue.axios.defaults.headers.common['Content-Language'] = locale
    loadMessages(locale)
    Cookies.set('locale', locale, { expires: 365 });
    context.commit(SET_LOCALE, locale)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
