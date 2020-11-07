import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import { Model } from 'vue-api-query'
import App from './App'
import VueImg from 'v-img'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.MIX_API_URL
axios.defaults.withCredentials = true
const token = sessionStorage.getItem('token');
if (token) {
  axios.default.headers.Authorization = token
}

Vue.prototype.$http = axios
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
