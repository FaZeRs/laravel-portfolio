<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('my_work') }}</h2>
          <v-layout row wrap class="mb-2">
            <v-flex xs12 sm12 text-xs-center>
              <v-btn small @click="filter(0)">{{ $t('All') }}</v-btn>
              <v-btn v-for="category in categories" :key="category.id" small @click="filter(category.id)">
                {{ category.title }}
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex v-for="project in projects" :key="project.id" :class="[project.category.title]" xs12 sm6 md4>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                  <v-img v-img="{src: project.image}" :src="project.image" :alt="project.title"
                         :lazy-src="project.image" height="200" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <div>
                      <h3 class="headline">{{ project.title }}</h3>
                      <span v-for="tag in project.tags" :key="tag.id" class="text-xs-center">
                        <v-chip :color="tag.color" dark>{{ tag.title }}</v-chip>
                      </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn v-for="link in project.links" :key="link.id" :href="link.url" target="_blank" icon>
                      <v-icon>{{ link.icon }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CATEGORIES, FETCH_PROJECTS } from '~/store/actions.type'

export default {
  layout: 'default',
  metaInfo () {
    return { title: this.$t('portfolio') }
  },
  data: () => ({
    title: window.config.appName,
    category: 0
  }),
  computed: {
    listConfig () {
      const { category } = this
      return {
        category
      }
    },
    ...mapGetters([
      'categories',
      'projects'
    ])
  },
  watch: {
    category () {
      this.fetchProjects()
    }
  },
  mounted () {
    this.fetchCategories()
    this.fetchProjects()
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch(FETCH_CATEGORIES, {})
    },
    fetchProjects () {
      this.$store.dispatch(FETCH_PROJECTS, this.listConfig)
    },
    filter: function (category) {
      this.category = category
    }
  }
}
</script>
