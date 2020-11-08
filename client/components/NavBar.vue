<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed temporary enable-resize-watcher app>
      <v-list class="pt-0">
        <v-divider/>
        <v-list-item v-for="item in items" :key="item.title" :to="localePath(item.url)" ripple>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(`${item.title}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-scroll="onScroll" :color="nav_color" app fixed dense dark elevate-on-scroll>
      <v-spacer/>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" v-if="!item.auth || item.auth && loggedIn" :key="item.title" :to="localePath(item.url)" text ripple>{{ $t(`${item.title}`) }}</v-btn>
        <v-btn v-if="loggedIn" @click="logout" text ripple>{{ $t('logout') }}</v-btn>
        <locale-menu/>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import LocaleMenu from '~/components/LocaleMenu'

export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue darken-3'
    },
    items: {
      type: Array,
      default: []
    }
  },
  components: {
    LocaleMenu
  },
  data: () => ({
    drawer: false,
    nav_color: null,
  }),
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    }
  },
  created() {
    this.nav_color = this.transparent ? 'transparent' : this.color
  },
  methods: {
    onScroll (e) {
      if(this.transparent) {
        if (window.pageYOffset > 100) {
          this.nav_color = this.color
        } else {
          this.nav_color = 'transparent'
        }
      }
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
