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

import '~/components'

import ApiService from '~/common/api.service'

Vue.config.productionTip = false

ApiService.init()

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
