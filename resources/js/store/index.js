import Vue from 'vue'
import Vuex from 'vuex'

import category from './category'
import project from './project'
import lang from './lang'
import education from './education'
import experience from './experience'
import settings from './settings'
import contact from './contact'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    category,
    project,
    education,
    experience,
    settings,
    contact
  }
})
