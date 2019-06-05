<template>
  <v-form>
    <v-alert v-model="successful" dismissible outline transition="scale-transition" type="success">
      {{ $t('contact_success') }}
    </v-alert>
    <v-alert v-model="error" dismissible outline transition="scale-transition" type="error">
      {{ $t('contact_error') }}
    </v-alert>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-text-field v-validate="'required'" :label="$t('name')" v-model="contact.name" :error-messages="errors.collect('name')" data-vv-name="name" required/>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field v-validate="'required|email'" :label="$t('email')" v-model="contact.email" :error-messages="errors.collect('email')" data-vv-name="email" required/>
      </v-flex>
      <v-flex xs12>
        <v-textarea v-validate="'required'" :label="$t('message')" v-model="contact.message" :error-messages="errors.collect('message')" data-vv-name="message"/>
      </v-flex>
      <vue-recaptcha v-if="sitekey" ref="recaptcha" :sitekey="sitekey" size="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"/>
      <v-btn @click="submit">{{ $t('send_message') }}</v-btn>
      <v-btn @click="clear">{{ $t('clear') }}</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import { SEND_CONTACT } from "~/store/actions.type";

export default {
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueRecaptcha
  },
  data: () => ({
    contact: {
      name: '',
      email: '',
      message: '',
    },
    successful: false,
    error: false,
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
    onCaptchaVerified: function () {
      this.send()
    },
    send () {
      this.$store.dispatch(SEND_CONTACT, this.contact)
        .then(() => {
          this.error = false;
          this.successful = true
          this.contact.name = ''
          this.contact.email = ''
          this.contact.message = ''
          this.$validator.reset()
        })
        .catch(() => {
          this.error = true
        });
    },
    clear () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.$validator.reset()
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
