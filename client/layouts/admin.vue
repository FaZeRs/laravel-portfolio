<template>
  <v-app id="app">
    <client-only>
      <nav-bar :items="nav_items"/>
    </client-only>
    <v-main class="d-flex align-center">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer class="elevation-0 mt-5 mb-5" color="transparent">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="text-center">
            &copy; 2017 - {{ year }} <span v-if="settings.app_name">{{ settings.app_name }}</span>. {{ $t('all_rights_reserved') }}
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
    <client-only>
      <back-to-top visible-offset="500"/>
    </client-only>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
import BackToTop from '~/components/BackToTop'
import { mapGetters } from 'vuex'

export default {
  name: 'admin_layout',
  components: {
    BackToTop,
    NavBar,
  },
  data: () => ({
    year: new Date().getFullYear(),
    nav_items: [
      { icon: 'home', title: 'dashboard', url: '/admin/dashboard' },
      { icon: 'home', title: 'education', url: '/admin/education' },
      { icon: 'home', title: 'experience', url: '/admin/experience' },
      { icon: 'home', title: 'categories', url: '/admin/categories' },
      { icon: 'home', title: 'projects', url: '/admin/projects' },
      { icon: 'home', title: 'tags', url: '/admin/tags' },
      { icon: 'home', title: 'home', url: '/' },
    ]
  }),
  computed: {
    ...mapGetters({
      settings: 'settings/settings'
    })
  },
}
</script>
