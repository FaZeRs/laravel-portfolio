<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-flex class="text-xs-center" xs12>
          <h2 class="section-title mb-5">{{ $t('get_in_touch') }}</h2>
          <v-layout row wrap justify-space-around class="text-xs-left">
            <v-flex xs12 md6>
              <contact-form/>
            </v-flex>
            <v-flex xs12 md4>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 1}`">
                  <div class="contact-block">
                    <h4 class="headline">{{ $t('contact_information') }}</h4>
                    <div class="flex pb-6">
                      <div class="con-text" v-if="email">
                        <v-icon small>mdi-email-outline</v-icon>
                        <a href="mailto:naurislinde@gmail.com">{{ email }}</a>
                      </div>
                    </div>
                    <div class="social mt-4">
                      <v-btn v-if="facebook" color="#3b5998" dark small fab :href="facebook" target="_blank">
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn v-if="twitter" color="#55acee" dark small fab :href="twitter" target="_blank">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn v-if="linkedin" color="#1985bc" dark small fab :href="linkedin" target="_blank">
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn v-if="github" color="#222" dark small fab :href="github" target="_blank">
                        <v-icon>mdi-github-circle</v-icon>
                      </v-btn>
                      <v-btn v-if="gitlab" color="#fca326" dark small fab :href="gitlab" target="_blank">
                        <v-icon>mdi-gitlab</v-icon>
                      </v-btn>
                      <v-btn v-if="bitbucket" color="#205081" dark small fab :href="bitbucket" target="_blank">
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
  data: () => ({
    email: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    github: null,
    gitlab: null,
    bitbucket: null,
  }),
  created () {
    this.email = this.$store.getters['settings']['contact_email']['value'];
    this.facebook = this.$store.getters['settings']['facebook']['value'];
    this.twitter = this.$store.getters['settings']['twitter']['value'];
    this.linkedin = this.$store.getters['settings']['linkedin']['value'];
    this.github = this.$store.getters['settings']['github']['value'];
    this.gitlab = this.$store.getters['settings']['gitlab']['value'];
    this.bitbucket = this.$store.getters['settings']['bitbucket']['value'];
  }
}
</script>
