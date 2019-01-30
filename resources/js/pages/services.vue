<template>
  <section>
    <v-container grid-list-md>
      <v-layout>
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('what_i_do') }}</h2>
          <v-layout wrap justify-space-around>
            <v-flex xs12 sm4 d-flex>
              <v-hover>
                <v-card class="pa-3" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                  <v-img :src="webDevelopment" :alt="$t('web_development')" :lazy-src="webDevelopment" height="75" aspect-ratio="1" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <h3 class="headline">{{ $t('web_development') }}</h3>
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12 sm4 d-flex>
              <v-hover>
                <v-card class="pa-3" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                  <v-img :src="seoOptimization" :alt="$t('seo_optimization')" :lazy-src="seoOptimization" height="75" aspect-ratio="1" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <h3 class="headline">{{ $t('seo_optimization') }}</h3>
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12 sm4 d-flex>
              <v-hover>
                <v-card class="pa-3" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                  <v-img :src="serverManagement" :alt="$t('server_management')" :lazy-src="serverManagement" height="75" aspect-ratio="1" contain></v-img>
                  <v-card-title primary-title class="justify-center">
                    <h3 class="headline">{{ $t('server_management') }}</h3>
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout class="mt-5 mb-5 pa-5">
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('how_i_work') }}</h2>
          <v-layout row fill-height align-center wrap>
            <v-flex xs12 sm5>
              <v-card class="elevation-0" color="transparent">
                <v-img :src="workProcess1" :alt="$t('planing_and_research')" :lazy-src="workProcess1" height="200" contain></v-img>
                <v-hover>
                  <div class="work-process-text mt-5" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                    <h4 class="block-title">
                      {{ $t('planing_and_research') }}
                    </h4>
                  </div>
                </v-hover>
              </v-card>
            </v-flex>
            <v-flex xs12 sm2 class="hidden-xs-only">
              <img :src="arrowLeft" alt="">
            </v-flex>
            <v-flex xs12 sm5>
              <v-card class="elevation-0" color="transparent">
                <v-img :src="workProcess2" :alt="$t('design_and_development')" :lazy-src="workProcess2" height="200" contain></v-img>
                <v-hover>
                  <div class="work-process-text mt-5" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                    <h4 class="block-title">
                      {{ $t('design_and_development') }}
                    </h4>
                  </div>
                </v-hover>
              </v-card>
            </v-flex>
            <v-flex xs12 sm5>
              <v-card class="elevation-0" color="transparent">
                <v-img :src="workProcess3" :alt="$t('testing_and_bug_fixing')" :lazy-src="workProcess3" height="200" contain></v-img>
                <v-hover>
                  <div class="work-process-text mt-5" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                    <h4 class="block-title">
                      {{ $t('testing_and_bug_fixing') }}
                    </h4>
                  </div>
                </v-hover>
              </v-card>
            </v-flex>
            <v-flex xs12 sm2 class="hidden-xs-only">
              <img :src="arrowLeft" alt="">
            </v-flex>
            <v-flex xs12 sm5>
              <v-card class="elevation-0" color="transparent">
                <v-img :src="workProcess4" :alt="$t('project_launch_and_support')" :lazy-src="workProcess4" height="200" contain></v-img>
                <v-hover>
                  <div class="work-process-text mt-5" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                    <h4 class="block-title">
                      {{ $t('project_launch_and_support') }}
                    </h4>
                  </div>
                </v-hover>
              </v-card>
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
    return {title: this.$t('services')}
  },
  data: () => ({
    title: window.config.appName,
    webDevelopment: require('../../img/web-development.png'),
    seoOptimization: require('../../img/seo-optimization.png'),
    serverManagement: require('../../img/server-management.png'),
    workProcess1: require('../../img/Work-Process_1.png'),
    workProcess2: require('../../img/Work-Process_2.png'),
    workProcess3: require('../../img/Work-Process_3.png'),
    workProcess4: require('../../img/Work-Process_4.png'),
    arrowLeft: require('../../img/arrow-left.png')
  })
}
</script>
