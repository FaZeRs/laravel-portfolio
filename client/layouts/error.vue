<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title: title,
      titleTemplate: '%s | ' + this.app_name
    }
  },
  data () {
    return {
      app_name: '',
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
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

<style scoped>
h1 {
  font-size: 20px;
}
</style>
