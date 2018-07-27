<template>
  <v-app id="inspire" light>
    <a href="https://github.com/FaZeRs/naurislinde.com" target="_blank">
      <img style="position: fixed; top: 0; left: 0; border: 0; z-index: 100" src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" alt="Fork me on GitHub">
    </a>
    <nav-bar/>
    <v-jumbotron :src="jumbotronBg" gradient="to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)" dark>
      <v-container fill-height text-xs-center>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3"><span v-html="$t('hello_guys')"/></h3>
            <span class="headline">{{ $t('i_am') }} <span class="typelist-skill">{{ $t('a_developer') }}</span></span>
            <v-divider class="my-3"/>
            <v-layout justify-space-around>
              <a href="https://www.facebook.com/nauris.linde" class="social-intro" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-hover"/>
              </a>
              <a href="https://twitter.com/naurislinde" class="social-intro" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-hover"/>
              </a>
              <a href="https://www.linkedin.com/in/nauris-linde-4027aaaa" class="social-intro" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-hover"/>
              </a>
              <a href="https://github.com/FaZeRs" class="social-intro" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" class="fa-hover"/>
              </a>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer class="elevation-0 mt-5 mb-5" color="transparent">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="text-xs-center">
            &copy; 2017 - {{ year }} {{ appName }}. {{ $t('all_rights_reserved') }}
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
    <cookie-law :message="$t('cookies_message')" :buttonText="$t('cookies_button_text')" theme="dark-blue"/>
    <back-to-top visible-offset="500"/>
  </v-app>
</template>

<script>
import NavBar from '~/partials/NavBar'
import BackToTop from '../components/BackToTop'
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'MainLayout',
  components: {
    BackToTop,
    NavBar,
    CookieLaw
  },
  data: () => ({
    appName: window.config.appName,
    year: window.config.year,
    jumbotronBg: require('../../img/jumbotron-bg.jpg')
  })
}
</script>
