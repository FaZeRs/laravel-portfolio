<template>
  <v-app id="inspire" light>
    <a href="https://github.com/FaZeRs/naurislinde.com" target="_blank">
      <img style="position: fixed; top: 0; left: 0; border: 0; z-index: 100" src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" alt="Fork me on GitHub">
    </a>
    <nav-bar/>
    <v-img :src="jumbotronBg" :lazy-src="jumbotronBg" height="400" gradient="to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)">
      <v-container fill-height text-xs-center>
        <v-layout align-center>
          <v-flex>
            <h3 class="white--text font-weight-regular display-3"><span v-html="$t('hello_guys', { name: name })"/></h3>
            <span class="font-weight-regular headline white--text">{{ $t('i_am') }} <span class="typelist-skill">{{ profession }}</span></span>
            <v-divider class="my-3" dark/>
            <v-layout justify-space-around>
              <v-btn v-if="facebook" :href="facebook" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-facebook</v-icon>
              </v-btn>
              <v-btn v-if="twitter" :href="twitter" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-twitter</v-icon>
              </v-btn>
              <v-btn v-if="linkedin" :href="linkedin" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn v-if="github" :href="github" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-github-circle</v-icon>
              </v-btn>
              <v-btn v-if="gitlab" :href="gitlab" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-gitlab</v-icon>
              </v-btn>
              <v-btn v-if="bitbucket" :href="bitbucket" target="_blank" outline fab color="white">
                <v-icon class="fa-hover" dark>mdi-bitbucket</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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
import BackToTop from '~/components/BackToTop'
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'MainLayout',
  components: {
    BackToTop,
    NavBar,
    CookieLaw
  },
  data: () => ({
    appName: '',
    name: '',
    profession: '',
    year: window.config.year,
    jumbotronBg: require('../../img/jumbotron-bg.jpg'),
    facebook: null,
    twitter: null,
    linkedin: null,
    github: null,
    gitlab: null,
    bitbucket: null,
  }),
  created () {
    this.appName = this.$store.getters['settings']['app_name']['value'];
    this.name = this.$store.getters['settings']['name']['value'];
    this.profession = this.$store.getters['settings']['profession']['value'];

    this.facebook = this.$store.getters['settings']['facebook']['value'];
    this.twitter = this.$store.getters['settings']['twitter']['value'];
    this.linkedin = this.$store.getters['settings']['linkedin']['value'];
    this.github = this.$store.getters['settings']['github']['value'];
    this.gitlab = this.$store.getters['settings']['gitlab']['value'];
    this.bitbucket = this.$store.getters['settings']['bitbucket']['value'];
  }
}
</script>
