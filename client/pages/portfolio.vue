<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-center" xs12>
          <h2 class="section-title mb-5">{{ $t('my_work') }}</h2>
          <v-layout row wrap class="mb-2">
            <v-flex xs12 sm12 text-center>
              <v-btn small class="ma-2" @click="changeCategory(null)">{{ $t('All') }}</v-btn>
              <v-btn v-for="category in categories" :key="category.id" small class="ma-2"
                     @click="changeCategory(category)">
                {{ category.title }}
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex v-for="project in projects" :key="project.id" xs12 sm6 md4>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="d-flex flex-column" tile height="100%">
                  <v-img v-if="project.images.length > 0" :src="projectFeaturedImage(project)" @click="showImages(project)" :alt="project.title" height="200" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <div>
                      <h3 class="headline">{{ project.title }}</h3>
                      <span v-for="tag in project.tags" :key="project.id + '_' + tag.id" class="text-center mr-1">
                        <v-chip :color="tag.color" dark>{{ tag.title }}</v-chip>
                      </span>
                    </div>
                  </v-card-title>
                  <v-spacer/>
                  <v-card-actions class="mt-auto">
                    <v-spacer/>
                    <v-btn v-for="link in project.links" :key="project.id + '_' + link.id" :href="link.url" target="_blank" icon>
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
    <light-box v-if="show_images" :media="images" v-on:onClosed="hideImages"></light-box>
  </section>
</template>

<script>
export default {
  name: 'portfolio',
  head() {
    return {
      title: this.$t('portfolio')
    }
  },
  data() {
    return {
      categories: [],
      projects: [],
      show_images: false,
      images: []
    }
  },
  async asyncData({store}) {
    const categories = await store.dispatch('category/fetchCategories')
    let projects = []
    categories.map((category) => {
      projects.push(...category.projects)
    })
    return {categories, projects}
  },
  fetchOnServer: false,
  methods: {
    changeCategory: function (category) {
      this.category = category
      if (category) {
        this.projects = category.projects
      } else {
        this.projects = []
        this.categories.map((item) => {
          this.projects.push(...item.projects)
        })
      }
    },
    showImages: function (project) {
      this.images = project.images
      this.show_images = true
    },
    hideImages: function () {
      this.images = []
      this.show_images = false
    },
    projectFeaturedImage(project) {
      if(project.images && project.images.length > 0) {
        return project.images[0]['thumb'] ?? project.images[0]['src']
      }
      return '' // todo : default project image
    }
  }
}
</script>
