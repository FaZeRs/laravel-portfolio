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
                      <div class="con-text">
                        <v-icon small>mdi-email-outline</v-icon>
                        <a href="mailto:naurislinde@gmail.com">naurislinde@gmail.com</a>
                      </div>
                    </div>
                    <div class="social mt-4">
                      <v-btn color="#3b5998" dark small fab href="https://www.facebook.com/nauris.linde" target="_blank">
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn color="#55acee" dark small fab href="https://twitter.com/naurislinde" target="_blank">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn color="#1985bc" dark small fab href="https://www.linkedin.com/in/nauris-linde-4027aaaa" target="_blank">
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn color="#222" dark small fab href="https://github.com/FaZeRs" target="_blank">
                        <v-icon>mdi-github-circle</v-icon>
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
    title: window.config.appName
  })
}
</script>
