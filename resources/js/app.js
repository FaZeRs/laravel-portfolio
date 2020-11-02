import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import axios from 'axios'
import { Model } from 'vue-api-query'
import App from './App'
import VueImg from 'v-img'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.MIX_API_URL
Model.$http = axios

Vue.use(VueImg)

/* eslint-disable no-new */
new Vue({
  vuetify,
  i18n,
  store,
  router,
  ...App
})
