<template>
  <v-menu offset-y open-on-hover close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text ripple>
        <span>{{ locales[locale] }}</span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(value, key) in locales" :key="key" @click.prevent="setLocale(key)">
        <v-list-item-title v-text="value"/>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    locale: 'locale',
    locales: 'locales'
  }),
  methods: {
    setLocale (locale) {
      this.$store.dispatch('lang/changeLocale', locale)
    }
  }
}
</script>
