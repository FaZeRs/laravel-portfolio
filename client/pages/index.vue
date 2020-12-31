<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs12 md4 class="text-center">
          <v-avatar v-if="settings.photo" size="300px" class="grey lighten-4">
            <img :src="settings.photo" :alt="settings.name">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 class="text-center">
          <h2 class="section-title">{{ $t('about_me') }}</h2>
          <p v-if="settings.about_you" class="my-4 subheading text-justify">
            <span v-html="settings.about_you"/>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'index',
  head() {
    return {
      title: this.$t('home')
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings/settings'
    })
  },
}
</script>
