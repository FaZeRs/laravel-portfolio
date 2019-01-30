<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('education') }}</h2>
          <v-layout row wrap class="text-xs-left">
            <v-flex xs12 sm6 d-flex>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="edu-block">
                    <div class="edu-session">
                      <span>2015 - 2017</span>
                    </div>
                    <div class="pl-5">
                      <h4 class="block-title title">
                        {{ $t('rtu_education') }}
                      </h4>
                      <h5 class="mb-4 mt-3 subheading">
                        {{ $t('rtu_address') }}
                      </h5>
                    </div>
                  </div>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="edu-block">
                    <div class="edu-session">
                      <span>2011 - 2015</span>
                    </div>
                    <div class="pl-5">
                      <h4 class="block-title title">
                        {{ $t('lvt_education') }}
                      </h4>
                      <h5 class="mb-4 mt-3 subheading">
                        {{ $t('lvt_address') }}
                      </h5>
                    </div>
                  </div>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout align-center class="mt-5 mb-5">
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('experience') }}</h2>
          <v-layout row wrap class="text-xs-left">
            <v-flex xs12 sm6 d-flex>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="work-exp-block">
                    <div class="working-duration title d-block">
                      Jan 2019-{{ $t('present') }}
                    </div>
                    <div class="work-exp-logo">
                      <img :src="giraffe360" width="123" alt="Giraffe360">
                    </div>
                    <h4 class="headline mt-3">{{ $t('giraffe360_position') }}</h4>
                    <h6 class="color-text title mt-2">
                      <a href="https://giraffe360.com" target="_blank">Giraffe360</a>
                    </h6>
                  </div>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="work-exp-block">
                    <div class="working-duration title d-block">
                      Aug 2016 - Jan 2019
                    </div>
                    <div class="work-exp-logo">
                      <img :src="sem" width="123" alt="Sem.lv">
                    </div>
                    <h4 class="headline mt-3">{{ $t('sem_position') }}</h4>
                    <h6 class="color-text title mt-2">
                      <a href="https://sem.lv" target="_blank">Sem.lv</a>
                    </h6>
                  </div>
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
    return {title: this.$t('experience')}
  },
  data: () => ({
    sem: require('../../img/sem.png'),
    giraffe360: require('../../img/giraffe360.svg'),
  })
}
</script>
