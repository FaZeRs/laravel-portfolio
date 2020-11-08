<template>
  <validation-observer ref="observer" v-slot="{ invalid, validated, passes }">
  <v-form>
    <v-alert v-model="successful" dismissible outlined transition="scale-transition" type="success">
      {{ $t('contact_success') }}
    </v-alert>
    <v-alert v-model="error" dismissible outlined transition="scale-transition" type="error">
      {{ $t('contact_error') }}
    </v-alert>
    <v-layout row wrap>
        <v-flex xs12 sm6>
          <validation-provider
            name="name"
            rules="required"
            v-slot="{ errors, valid }"
          >
            <v-text-field :label="$t('fields.name')" v-model="contact.name" :error-messages="errors" :success="valid" required/>
          </validation-provider>
        </v-flex>
        <v-flex xs12 sm6>
          <validation-provider
            name="email"
            rules="required|email"
            v-slot="{ errors, valid }"
          >
            <v-text-field :label="$t('fields.email')" v-model="contact.email" :error-messages="errors" :success="valid" required/>
          </validation-provider>
        </v-flex>
        <v-flex xs12>
          <validation-provider
            name="message"
            rules="required"
            v-slot="{ errors, valid }"
          >
            <v-textarea :label="$t('fields.message')" v-model="contact.message" :error-messages="errors" :success="valid" required/>
          </validation-provider>
        </v-flex>
        <vue-recaptcha v-if="google_site_key" ref="recaptcha" :sitekey="sitekey" size="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"/>
        <v-btn class="ma-2" @click="passes(submit)" :loading="loading" :disabled="invalid || !validated || loading">{{ $t('send_message') }}</v-btn>
        <v-btn class="ma-2" @click="clear">{{ $t('clear') }}</v-btn>
    </v-layout>
  </v-form>
  </validation-observer>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import {ValidationObserver, ValidationProvider} from 'vee-validate';

export default {
  components: {
    VueRecaptcha,
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    contact: {
      name: '',
      email: '',
      message: '',
    },
    successful: false,
    error: false,
    loading: false,
    google_site_key: process.env.APP_GOOGLE_RECAPTCHA,
  }),
  methods: {
    async submit () {
      this.loading = true
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
          if (this.$refs.recaptcha) {
              this.$refs.recaptcha.execute()
          } else {
              this.send()
          }
      } else {
        this.loading = false
      }
    },
    onCaptchaVerified: function () {
      this.send()
    },
    send () {
      this.$store.dispatch('contact/sendContactMessage', this.contact)
        .then(() => {
          this.error = false;
          this.successful = true
          this.contact.name = ''
          this.contact.email = ''
          this.contact.message = ''
          this.$refs.observer.reset();
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
          if (error.response && error.response.status === 422) {
            this.$refs.observer.setErrors(error.response.data.errors);
          } else {
            this.error = true
          }
          this.loading = false
        });
    },
    async clear() {
      this.contact.name = this.contact.email = this.contact.message = '';
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
