<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed temporary enable-resize-watcher app>
      <v-list class="pt-0">
        <v-divider/>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.url" ripple>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t(`${item.title}`) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-scroll="onScroll" :color="color" class="elevation-0" fixed dark prominent app>
      <v-spacer/>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.title" :to="item.url" flat ripple>{{ $t(`${item.title}`) }}</v-btn>
        <locale-menu/>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import LocaleMenu from '~/components/LocaleMenu'

export default {
  components: {
    LocaleMenu
  },
  data: () => ({
    appName: window.config.appName,
    drawer: false,
    color: 'transparent',
    items: [
      { icon: 'home', title: 'home', url: '/' },
      { icon: 'work', title: 'experience', url: 'experience' },
      { icon: 'build', title: 'services', url: 'services' },
      { icon: 'code', title: 'portfolio', url: 'portfolio' },
      { icon: 'contact_mail', title: 'contact', url: 'contact' }
    ]
  }),
  methods: {
    onScroll (e) {
      if (window.pageYOffset > 300) {
        this.color = 'blue darken-3'
      } else {
        this.color = 'transparent'
      }
    }
  }
}
</script>
