<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-center" xs12>
          <h2 class="section-title mb-5">{{ $t('get_in_touch') }}</h2>
          <v-layout row wrap justify-space-around class="text-left">
            <v-flex xs12 md6>
              <contact-form/>
            </v-flex>
            <v-flex xs12 md4>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="contact-block">
                    <h4 class="headline">{{ $t('contact_information') }}</h4>
                    <div class="flex pb-6">
                      <div class="con-text" v-if="(settings.contact_email && settings.contact_email.value)">
                        <v-icon small>mdi-email-outline</v-icon>
                        <a :href="`mailto:${settings.contact_email.value}`">{{ settings.contact_email.value }}</a>
                      </div>
                    </div>
                    <div class="social mt-4">
                      <v-btn v-if="(settings.facebook && settings.facebook.value)" color="#3b5998" dark small fab :href="settings.facebook.value" target="_blank">
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn v-if="(settings.twitter && settings.twitter.value)" color="#55acee" dark small fab :href="settings.twitter.value" target="_blank">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn v-if="(settings.linkedin && settings.linkedin.value)" color="#1985bc" dark small fab :href="settings.linkedin.value" target="_blank">
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn v-if="(settings.github && settings.github.value)" color="#222" dark small fab :href="settings.github.value" target="_blank">
                        <v-icon>mdi-github-circle</v-icon>
                      </v-btn>
                      <v-btn v-if="(settings.gitlab && settings.gitlab.value)" color="#fca326" dark small fab :href="settings.gitlab.value" target="_blank">
                        <v-icon>mdi-gitlab</v-icon>
                      </v-btn>
                      <v-btn v-if="(settings.bitbucket && settings.bitbucket.value)" color="#205081" dark small fab :href="settings.bitbucket.value" target="_blank">
                        <v-icon>mdi-bitbucket</v-icon>
                      </v-btn>
                    </div>
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
import ContactForm from '~/components/ContactForm'
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  metaInfo () {
    return {
      title: this.$t('contact')
    }
  },
  components: {
    ContactForm
  },
  computed: {
    ...mapGetters(['settings']),
  }
}
</script>
