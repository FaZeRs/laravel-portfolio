import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from "js-cookie";

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Cookies.get('locale') || 'en',
  fallbackLocale: 'en',
  messages: {},
  silentTranslationWarn: false
})

/**
 * @param {String} locale
 */
export async function loadMessages (locale) {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(/* webpackChunkName: "lang-[request]" */ `~/lang/${locale}`)
    i18n.setLocaleMessage(locale, messages[locale])
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale
  }
}

;(async function () {
  await loadMessages('en')
})()

export default i18n
