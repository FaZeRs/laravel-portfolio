<template>
  <v-form>
    <v-alert v-model="successful" dismissible outline transition="scale-transition" type="success">
      {{ $t('contact_success') }}
    </v-alert>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-text-field v-validate="'required'" :label="$t('name')" v-model="name" :error-messages="errors.collect('name')" data-vv-name="name" required/>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field v-validate="'required|email'" :label="$t('email')" v-model="email" :error-messages="errors.collect('email')" data-vv-name="email" required/>
      </v-flex>
      <v-flex xs12>
        <v-textarea v-validate="'required'" :label="$t('message')" v-model="message" :error-messages="errors.collect('message')" data-vv-name="message"/>
      </v-flex>
      <vue-recaptcha v-if="sitekey" ref="recaptcha" :sitekey="sitekey" size="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"/>
      <v-btn @click="submit">{{ $t('send_message') }}</v-btn>
      <v-btn @click="clear">{{ $t('clear') }}</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueRecaptcha
  },
  data: () => ({
    name: '',
    email: '',
    message: '',
    successful: false,
    sitekey: window.config.googleReCaptcha
  }),
  mounted () {
    this.$validator.localize(this.$i18n.locale, this.dictionary)
  },
  created () {
    this.$validator.localize('lv', {
      messages: {
        email: (field) => `Laukam ${field} jābūt derīgai e-pasta adresei.`,
        required: (field) => `Lauks ${field} ir obligāts.`
      },
      attributes: {
        email: 'e-pasts',
        name: 'vārds',
        message: 'vēstule'
      }
    })

    this.$validator.localize(this.$i18n.locale)
  },
  methods: {
    submit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
            if(this.$refs.recaptcha) {
              this.$refs.recaptcha.execute()
            } else {
              this.send()
            }
        }
      })
    },
    onCaptchaVerified: function (recaptchaToken) {
      this.$refs.recaptcha.reset()
      this.send()
    },
    send () {
      axios.post('/api/contact/send', {
        name: this.name,
        email: this.email,
        message: this.message
      }).then(() => {
        this.successful = true
      })

      this.name = ''
      this.email = ''
      this.message = ''
      this.successful = false
      this.$validator.reset()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.$validator.reset()
      if(this.$refs.recaptcha) {
        this.$refs.recaptcha.reset()
      }
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
