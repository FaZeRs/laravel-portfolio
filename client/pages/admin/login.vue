<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 lg4>
        <v-card class="elevation-1 pa-3">
          <validation-observer
            ref="observer"
            v-slot="{ invalid, validated, passes }"
          >
            <form @submit.prevent="passes(onSubmit)">
              <v-card-text>
                <div class="layout column align-center">
                  <h1 class="flex my-4 primary--text">{{ settings.app_name }}</h1>
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="form.email"
                    :error-messages="errors"
                    :label="$t('fields.email')">
                  </v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
                    v-model="form.password"
                    :error-messages="errors"
                    :label="$t('fields.password')"
                    @click:append="hidePassword = !hidePassword"/>
                </validation-provider>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary" type="submit"
                  :loading="loading" :disabled="invalid || !validated || loading"
                >
                  {{ $t('login') }}
                </v-btn>
                <v-btn @click="clear">
                  {{ $t('clear') }}
                </v-btn>
              </v-card-actions>
            </form>
          </validation-observer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <!--  <section>-->
  <!--    <v-container grid-list-md>-->
  <!--      <validation-observer-->
  <!--        ref="observer"-->
  <!--        v-slot="{ invalid, validated, passes }"-->
  <!--      >-->
  <!--        <form @submit.prevent="passes(onSubmit)">-->
  <!--          <validation-provider-->
  <!--            v-slot="{ errors }"-->
  <!--            name="email"-->
  <!--            rules="required|email"-->
  <!--          >-->
  <!--            <v-text-field-->
  <!--              v-model="form.email"-->
  <!--              :error-messages="errors"-->
  <!--              :label="$t('fields.email')"-->
  <!--              required-->
  <!--            ></v-text-field>-->
  <!--          </validation-provider>-->
  <!--          <validation-provider-->
  <!--            v-slot="{ errors }"-->
  <!--            name="password"-->
  <!--            rules="required"-->
  <!--          >-->
  <!--            <v-text-field-->
  <!--              v-model="form.password"-->
  <!--              type="password"-->
  <!--              :error-messages="errors"-->
  <!--              :label="$t('fields.password')"-->
  <!--              required-->
  <!--            ></v-text-field>-->
  <!--          </validation-provider>-->

  <!--          <v-btn-->
  <!--            class="mr-4"-->
  <!--            type="submit"-->
  <!--            :loading="loading" :disabled="invalid || !validated || loading"-->
  <!--          >-->
  <!--            {{ $t('login') }}-->
  <!--          </v-btn>-->
  <!--          <v-btn @click="clear">-->
  <!--            {{ $t('clear') }}-->
  <!--          </v-btn>-->
  <!--        </form>-->
  <!--      </validation-observer>-->
  <!--    </v-container>-->
  <!--  </section>-->
</template>
<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import {mapGetters} from "vuex";

export default {
  name: 'login',
  layout: 'login',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  metaInfo() {
    return {
      title: this.$t('login')
    }
  },
  data: () => ({
    form: {
      email: '',
      password: '',
    },
    loading: false,
    hidePassword: true,
  }),
  created() {
    if (this.$auth.loggedIn) {
      this.$auth.redirect('home')
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings/settings'
    })
  },
  methods: {
    onSubmit() {
      // console.log('submit')
      this.loading = true
      const isValid = this.$refs.observer.validate();
      if (isValid) {
        this.login()
      } else {
        this.loading = false
      }
    },
    login() {
      this.$auth.loginWith('laravelJWT', {data: this.form}).then((response) => {
        this.clear()
        this.loading = false
      }).catch((error) => {
        if (error.response.status === 422) {
          this.$refs.observer.setErrors(error.response.data.errors);
        }
        this.loading = false
      })
    },
    clear() {
      this.form.email = this.form.password = '';
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
}
</script>
