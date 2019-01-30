import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import {
  faFacebookF, faTwitter, faLinkedinIn, faGithub, faGitlab
} from '@fortawesome/free-brands-svg-icons'

import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(
  faFacebookF, faTwitter, faLinkedinIn, faGithub, faGitlab, faCircle
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
