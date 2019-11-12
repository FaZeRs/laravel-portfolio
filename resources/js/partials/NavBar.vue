<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed temporary enable-resize-watcher app>
      <v-list class="pt-0">
        <v-divider/>
        <v-list-item v-for="item in items" :key="item.title" :to="item.url" ripple>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(`${item.title}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-scroll="onScroll" :color="color" fixed dark :elevation="elevation">
      <v-spacer/>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.title" :to="item.url" text ripple>{{ $t(`${item.title}`) }}</v-btn>
        <locale-menu/>
      </v-toolbar-items>
    </v-app-bar>
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
    elevation: 0,
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
      if (window.pageYOffset > 310) {
        this.color = 'blue darken-3'
        this.elevation = 24
      } else {
        this.color = 'transparent'
        this.elevation = 0
      }
    }
  }
}
</script>
