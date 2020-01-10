<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs12 md4 class="text-center">
          <v-avatar v-if="settings.photo" size="300px" class="grey lighten-4">
            <img :src="'storage/' + settings.photo.value" :alt="settings.name.value">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 class="text-center">
          <h2 class="section-title">{{ $t('about_me') }}</h2>
          <p v-if="settings.about_you" class="my-4 subheading text-justify">
            <span v-html="settings.about_you.value"/>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  data: () => ({
    jumbotronBg: require('../../img/jumbotron-bg.jpg'),
  }),
  computed: {
    ...mapGetters([
      'settings'
    ])
  },
  metaInfo () {
    return {title: this.$t('home')}
  }
}
</script>
