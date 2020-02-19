<template>
  <ValidationObserver ref="observer" v-slot="{ invalid, validated, passes }">
  <v-form>
    <v-alert v-model="successful" dismissible outlined transition="scale-transition" type="success">
      {{ $t('contact_success') }}
    </v-alert>
    <v-alert v-model="error" dismissible outlined transition="scale-transition" type="error">
      {{ $t('contact_error') }}
    </v-alert>
    <v-layout row wrap>
        <v-flex xs12 sm6>
          <ValidationProvider
            :name="$t('name')"
            rules="required"
            v-slot="{ errors, valid }"
          >
            <v-text-field :label="$t('fields.name')" v-model="contact.name" :error-messages="errors" :success="valid" required/>
          </ValidationProvider>
        </v-flex>
        <v-flex xs12 sm6>
          <ValidationProvider
            :name="$t('email')"
            rules="required|email"
            v-slot="{ errors, valid }"
          >
            <v-text-field :label="$t('fields.email')" v-model="contact.email" :error-messages="errors" :success="valid" required/>
          </ValidationProvider>
        </v-flex>
        <v-flex xs12>
          <ValidationProvider
            :name="$t('message')"
            rules="required"
            v-slot="{ errors, valid }"
          >
            <v-textarea :label="$t('fields.message')" v-model="contact.message" :error-messages="errors" :success="valid" required/>
          </ValidationProvider>
        </v-flex>
        <vue-recaptcha v-if="sitekey" ref="recaptcha" :sitekey="sitekey" size="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"/>
        <v-btn class="ma-2" @click="passes(submit)" :loading="loading" :disabled="invalid || !validated || loading">{{ $t('send_message') }}</v-btn>
        <v-btn class="ma-2" @click="clear">{{ $t('clear') }}</v-btn>
    </v-layout>
  </v-form>
  </ValidationObserver>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import i18n from "~/plugins/i18n";

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
    sitekey: window.config.googleReCaptcha,
    loading: false,
  }),
  created () {
    configure({
      defaultMessage: (field, values) => {
        // override the field name.
        values._field_ = i18n.t(`fields.${field}`);

        return i18n.t(`validation.${values._rule_}`, values);
      }
    });
    extend('required', required);
    extend('email', email);
  },
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
      this.$store.dispatch('contact/send', this.contact)
        .then(() => {
          this.error = false;
          this.successful = true
          this.contact.name = ''
          this.contact.email = ''
          this.contact.message = ''
          this.$refs.observer.reset();
          this.loading = false
        })
        .catch(() => {
          this.error = true
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
