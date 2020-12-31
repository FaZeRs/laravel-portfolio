<template>
  <v-app id="app">
    <v-main id="content">
      <v-container fluid fill-height>
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
  </v-app>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'login_layout',
  head() {
    return {
      title: this.app_name,
      titleTemplate: '%s | ' + this.app_name
    }
  },
  data: () => ({
    app_name: '',
    year: new Date().getFullYear(),
  }),
  computed: {
    ...mapGetters({
      settings: 'settings/settings'
    })
  },
  mounted() {
    if(this.settings) {
      this.app_name = this.settings.app_name
    }
  }
}
</script>
