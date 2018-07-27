import 'babel-polyfill'
import 'vuetify/src/stylus/app.styl'
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VList,
  VDivider,
  VIcon,
  VBtn,
  VMenu,
  VJumbotron,
  VAvatar,
  VGrid,
  VCard,
  VChip,
  VForm,
  VAlert,
  VTextField,
  VTextarea
} from 'vuetify'
import { Ripple, Scroll } from 'vuetify/es5/directives'

import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VeeValidate from 'vee-validate'
import VueImg from 'v-img'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VList,
    VDivider,
    VIcon,
    VBtn,
    VGrid,
    VMenu,
    VJumbotron,
    VAvatar,
    VCard,
    VChip,
    VForm,
    VAlert,
    VTextField,
    VTextarea
  },
  directives: {
    Ripple,
    Scroll
  }
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
