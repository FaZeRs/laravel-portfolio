import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import { Model } from 'vue-api-query'
import App from './App'
import VueImg from 'v-img'
import axios from '~/plugins/axios'

Vue.config.productionTip = false

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
