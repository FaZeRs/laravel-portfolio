import Vue from 'vue'
import Vuex from 'vuex'

import project from './project.module'
import lang from './lang.module'
import education from './education.module'
import experience from './experience.module'
import settings from './settings.module'
import contact from './contact.module'
import user from './user.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    project,
    education,
    experience,
    settings,
    contact,
    user,
  },
  strict: process.env.NODE_ENV !== 'production'
})
