import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'

import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VeeValidate from 'vee-validate'
import VueImg from 'v-img'

import '~/plugins'
import '~/components'

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(VeeValidate)
Vue.use(VueImg)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
