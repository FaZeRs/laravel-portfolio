<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-center" xs12>
          <h2 class="section-title mb-5">{{ $t('education') }}</h2>
          <v-layout row wrap class="text-left">
            <v-flex v-for="school in education" :key="school.id" xs12 sm6>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`" height="100%">
                  <div class="edu-block">
                    <div class="edu-session">
                      <span v-if="school.ongoing">{{ school.from }} - {{ $t('present') }}</span>
                      <span v-else>{{ school.from }} - {{ school.to }}</span>
                    </div>
                    <div class="pl-12">
                      <h4 class="block-title title">
                        {{ school.qualification }}
                      </h4>
                      <h5 class="mb-4 mt-3 subtitle-1">
                        {{ school.organisation }}
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
        <v-flex class="text-center" xs12>
          <h2 class="section-title mb-5">{{ $t('experience') }}</h2>
          <v-layout row wrap class="text-left">
            <v-flex v-for="job in experience" :key="job.id" xs12 sm6>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`" height="100%">
                  <div class="work-exp-block">
                    <div class="working-duration title d-block">
                      <span v-if="job.ongoing">{{ job.from }} - {{ $t('present') }}</span>
                      <span v-else>{{ job.from }} - {{ job.to }}</span>
                    </div>
                    <div class="work-exp-logo">
                      <v-img v-if="job.logo" :src="job.logo" aspect-ratio="1" contain max-width="125"></v-img>
                    </div>
                    <h4 class="headline mt-3">{{ job.position }}</h4>
                    <h6 class="color-text title mt-2">
                      <a :href="job.website" target="_blank">{{ job.employer }}</a>
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
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  metaInfo () {
    return {title: this.$t('experience')}
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['education', 'experience'])
  },
  mounted () {
    this.fetchEducation()
    this.fetchExperience()
  },
  methods: {
    fetchEducation () {
      this.$store.dispatch('fetchEducation')
    },
    fetchExperience () {
      this.$store.dispatch('fetchExperience')
    }
  }
}
</script>
