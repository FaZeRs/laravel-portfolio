import "@babel/polyfill";
import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VueImg from 'v-img'

import '~/components'

import ApiService from '~/common/api.service'

Vue.config.productionTip = false

ApiService.init()

Vue.use(VueImg)

// axios
import axios from "./axios"
Vue.prototype.$http = axios

// API Calls
import "./http/requests"

/* eslint-disable no-new */
new Vue({
  vuetify,
  i18n,
  store,
  router,
  ...App
})
