<template>
  <v-app id="inspire" light>
    <a href="https://github.com/FaZeRs/naurislinde.com" target="_blank">
      <img style="position: fixed; top: 0; left: 0; border: 0; z-index: 100" src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" alt="Fork me on GitHub">
    </a>
    <nav-bar/>
    <v-img :src="jumbotronBg" :lazy-src="jumbotronBg" height="400" max-height="400" gradient="to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)">
      <v-container fill-height text-center>
        <v-layout align-center justify-center>
          <v-flex>
            <h3 v-if="(settings.name && settings.name.value)"  class="white--text font-weight-regular display-3"><span v-html="$t('hello_guys', { name: settings.name.value })"/></h3>
            <span v-if="(settings.profession && settings.profession.value)" class="font-weight-regular headline white--text">{{ $t('i_am') }} <span class="typelist-skill">{{ settings.profession.value }}</span></span>
            <v-divider class="my-3" dark/>
            <v-layout justify-space-around>
              <v-btn v-if="(settings.facebook && settings.facebook.value)" :href="settings.facebook.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-facebook</v-icon>
              </v-btn>
              <v-btn v-if="(settings.twitter && settings.twitter.value)" :href="settings.twitter.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-twitter</v-icon>
              </v-btn>
              <v-btn v-if="(settings.linkedin && settings.linkedin.value)" :href="settings.linkedin.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn v-if="(settings.github && settings.github.value)" :href="settings.github.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-github-circle</v-icon>
              </v-btn>
              <v-btn v-if="(settings.gitlab && settings.gitlab.value)" :href="settings.gitlab.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-gitlab</v-icon>
              </v-btn>
              <v-btn v-if="(settings.bitbucket && settings.bitbucket.value)" :href="settings.bitbucket.value" target="_blank" outlined fab color="white">
                <v-icon class="fa-hover" dark>mdi-bitbucket</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-content id="content">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer class="elevation-0 mt-5 mb-5" color="transparent">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="text-center">
            &copy; 2017 - {{ year }} <span v-if="(settings.app_name && settings.app_name.value)">{{ settings.app_name.value }}</span>. {{ $t('all_rights_reserved') }}
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
import BackToTop from '~/components/BackToTop'
import CookieLaw from 'vue-cookie-law'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    BackToTop,
    NavBar,
    CookieLaw
  },
  data: () => ({
    year: window.config.year,
    jumbotronBg: require('../../img/jumbotron-bg.jpg'),
  }),
  computed: {
    ...mapGetters([
      'settings'
    ])
  }
}
</script>
