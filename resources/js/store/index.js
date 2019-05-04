import Vue from 'vue'
import Vuex from 'vuex'

import project from './project.module'
import lang from './lang.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    project
  }
})
