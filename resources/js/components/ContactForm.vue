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
            <v-text-field :label="$t('name')" v-model="contact.name" :error-messages="errors" :success="valid" required/>
          </ValidationProvider>
        </v-flex>
        <v-flex xs12 sm6>
          <ValidationProvider
            :name="$t('email')"
            rules="required|email"
            v-slot="{ errors, valid }"
          >
            <v-text-field :label="$t('email')" v-model="contact.email" :error-messages="errors" :success="valid" required/>
          </ValidationProvider>
        </v-flex>
        <v-flex xs12>
          <ValidationProvider
            :name="$t('message')"
            rules="required"
            v-slot="{ errors, valid }"
          >
            <v-textarea :label="$t('message')" v-model="contact.message" :error-messages="errors" :success="valid" required/>
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
import { SEND_CONTACT } from "~/store/actions.type";
import { ValidationObserver, ValidationProvider, localize, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import lv from 'vee-validate/dist/locale/lv.json';

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
  mounted () {
      console.log('mounted')
    //localize(`${this.$i18n.locale}`, this.$i18n.locale)
  },
  created () {
      console.log('created')
    extend('required', required);
    extend('email', email);
      // localize('lv', {
      //     messages: {
      //         email: (field) => `Laukam ${field} jābūt derīgai e-pasta adresei.`,
      //         required: (field) => `Lauks ${field} ir obligāts.`
      //     },
      //     attributes: {
      //         email: 'e-pasts',
      //         name: 'vārds',
      //         message: 'vēstule'
      //     }
      // })
      //localize({ en, lv });

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
      this.$store.dispatch(SEND_CONTACT, this.contact)
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
