import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from '~/plugins/axios'
import { messages } from '~/lang/messages';
import Cookies from "js-cookie";

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Cookies.get('locale') || 'en',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: false
})

const loadedLanguages = ['en', 'lv']

/**
 * @param {String} locale
 */
export function loadMessages (locale) {
    if (i18n.locale !== locale) {
        if (!loadedLanguages.includes(locale)) {
            return import(/* webpackChunkName: "lang-[request]" */ `~/lang/${locale}`).then(msgs => {
                i18n.setLocaleMessage(locale, msgs)
                loadedLanguages.push(locale)
                return setI18nLanguage(locale)
            })
        }
        return Promise.resolve(setI18nLanguage(locale))
    }
    return Promise.resolve(locale)
}

function setI18nLanguage (locale) {
    i18n.locale = locale
    axios.defaults.headers.common['Accept-Language'] = locale
    document.querySelector('html').setAttribute('lang', locale)
    return locale
}

export default i18n
