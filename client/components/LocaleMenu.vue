<template>
  <v-menu offset-y open-on-hover close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text ripple>
        <span>{{ $i18n.locale }}</span>
        <v-icon dark>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        <v-list-item-title v-text="locale.name"/>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
