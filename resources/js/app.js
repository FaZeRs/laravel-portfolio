import "@babel/polyfill";
import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VueImg from 'v-img'
import ApiService from '~/services/api.service'
import { TokenService } from '~/services/storage.service'
import '~/components'

Vue.config.productionTip = false

ApiService.init(process.env.MIX_API_URL)

if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.use(VueImg)

/* eslint-disable no-new */
new Vue({
  vuetify,
  i18n,
  store,
  router,
  ...App
})
