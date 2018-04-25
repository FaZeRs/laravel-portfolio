import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import {
  faFacebookF, faTwitter, faLinkedinIn, faGithub, faGitlab
} from '@fortawesome/fontawesome-free-brands'

import { faCircle } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faFacebookF, faTwitter, faLinkedinIn, faGithub, faGitlab, faCircle
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
