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
                        <v-icon>email</v-icon>
                        <a href="mailto:naurislinde@gmail.com">naurislinde@gmail.com</a>
                      </div>
                    </div>
                    <div class="social mt-4">
                      <a href="https://www.facebook.com/nauris.linde" target="_blank">
                        <font-awesome-layers class="fa-4x">
                          <font-awesome-icon icon="circle" style="color: #3b5998;"/>
                          <font-awesome-icon :icon="['fab', 'facebook-f']" transform="shrink-6" style="color: white;"/>
                        </font-awesome-layers>
                      </a>
                      <a href="https://twitter.com/naurislinde" target="_blank">
                        <font-awesome-layers class="fa-4x">
                          <font-awesome-icon icon="circle" style="color: #55acee;"/>
                          <font-awesome-icon :icon="['fab', 'twitter']" transform="shrink-6" style="color: white;"/>
                        </font-awesome-layers>
                      </a>

                      <a href="https://www.linkedin.com/in/nauris-linde-4027aaaa" target="_blank">
                        <font-awesome-layers class="fa-4x">
                          <font-awesome-icon icon="circle" style="color: #1985bc;"/>
                          <font-awesome-icon :icon="['fab', 'linkedin-in']" transform="shrink-6" style="color: white;"/>
                        </font-awesome-layers>
                      </a>

                      <a href="https://github.com/FaZeRs" target="_blank">
                        <font-awesome-layers class="fa-4x">
                          <font-awesome-icon icon="circle" style="color: #222222;"/>
                          <font-awesome-icon :icon="['fab', 'github']" transform="shrink-6" style="color: white;"/>
                        </font-awesome-layers>
                      </a>
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
