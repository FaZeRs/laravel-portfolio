import Vue from 'vue'
import BackToTop from './BackToTop'

// Components that are registered globaly.
[
  BackToTop
].forEach(Component => {
  Vue.component(Component.name, Component)
})
