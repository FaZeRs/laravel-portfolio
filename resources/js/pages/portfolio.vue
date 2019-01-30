<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('my_work') }}</h2>
          <v-layout row wrap class="mb-2">
            <v-flex xs12 sm12 text-xs-center>
              <v-btn small @click="filter('all')">{{ $t('All') }}</v-btn>
              <v-btn small @click="filter('wordpress')">{{ $t('Wordpress') }}</v-btn>
              <v-btn small @click="filter('laravel')">{{ $t('Laravel') }}</v-btn>
              <v-btn small @click="filter('open-source')">{{ $t('Open source') }}</v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex v-for="(project, index) in filteredProjects" :key="index" :class="[project.category]" xs12 sm6 md4>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                  <v-img v-img="{src: project.image.src}" :src="project.image.thumb" :alt="project.name" :lazy-src="project.image.thumb" height="200" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <div>
                      <h3 class="headline">{{ project.name }}</h3>
                      <span class="grey--text">
                        <span v-for="(tech, index) in project.tech" :key="index" class="text-xs-center">
                          <v-chip>{{ tech }}</v-chip>
                        </span>
                      </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn v-if="project.link" :href="project.link" target="_blank" icon>
                      <v-icon>open_in_browser</v-icon>
                    </v-btn>
                    <v-btn v-if="project.github" :href="project.github" target="_blank" icon>
                      <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
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
export default {
  layout: 'default',
  metaInfo () {
    return {title: this.$t('portfolio')}
  },
  data: () => ({
    title: window.config.appName,
    projects: [
      {
        id: 1,
        name: 'Baltic Probiotics',
        categories: ['all', 'wordpress'],
        tech: ['Wordpress'],
        image: {
          thumb: require('../../img/baltic_probiotics_thumb.png'),
          src: require('../../img/baltic_probiotics.png')
        },
        link: 'https://balticprobiotics.lv'
      },
      {
        id: 2,
        name: 'Nauris Linde',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Vue.js', 'Vuetify', 'Laravel'],
        image: {
          thumb: require('../../img/naurislinde_thumb.png'),
          src: require('../../img/naurislinde.png')
        },
        link: 'https://naurislinde.com'
      },
      {
        id: 3,
        name: 'Laravel Boilerplate CMS',
        categories: ['all', 'laravel', 'open-source'],
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        image: {
          thumb: require('../../img/boilerplate_thumb.png'),
          src: require('../../img/boilerplate.png')
        },
        github: 'https://github.com/FaZeRs/Boilerplate'
      },
      {
        id: 4,
        name: 'Kurzemes bizness',
        categories: ['all', 'wordpress'],
        tech: ['Wordpress'],
        image: {
          thumb: require('../../img/kurzemes_bizness_thumb.png'),
          src: require('../../img/kurzemes_bizness.png')
        },
        link: 'https://kurzemesbizness.lv/'
      }
    ],
    currentCategory: 'all'
  }),
  computed: {
    filteredProjects: function () {
      let filter = this.currentCategory
      return this.projects.filter(function (project) {
        return project.categories.indexOf(filter) !== -1
      })
    }
  },
  methods: {
    filter: function (category) {
      this.currentCategory = category
    }
  }
}
</script>
