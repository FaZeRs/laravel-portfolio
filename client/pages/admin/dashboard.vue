<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Application Name*"
                v-model="form.app_name"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Your Name*"
                v-model="form.name"
                hint="mdi-github"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                v-model="form.photo"
                label="Photo*"
                prepend-icon=""
              ></v-file-input>
              <v-avatar v-if="form.photo" @click="showPhotoOverlay(form.photo)">
                <img
                  :src="form.photo"
                >
              </v-avatar>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="About You*"
                v-model="form.about_you"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Contact E-Mail*"
                v-model="form.contact_email"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Your Profession*"
                v-model="form.profession"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Facebook*"
                v-model="form.facebook"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Twitter*"
                v-model="form.twitter"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="LinkedIn*"
                v-model="form.linkedin"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Github*"
                v-model="form.github"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Gitlab*"
                v-model="form.gitlab"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Bitbucket*"
                v-model="form.bitbucket"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <v-spacer></v-spacer>
              <v-btn
                @click="cancel"
              >
                Cancel
              </v-btn>
              <v-btn
                color="success"
                @click="save"
              >
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
    <v-overlay :value="photo_overlay">
      <v-img
        v-click-outside="hidePhotoOverlay"
        :src="photo_url"
      ></v-img>
    </v-overlay>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  layout: 'admin',
  middleware: 'auth',
  head() {
    return {
      title: this.$t('dashboard'),
    }
  },
  data: () => ({
    form: {
      app_name: null,
      name: null,
      photo: null,
      about_you: null,
      contact_email: null,
      profession: null,
      facebook: null,
      twitter: null,
      linkedin: null,
      github: null,
      gitlab: null,
      bitbucket: null,
    },
    photo_overlay: false,
    photo_url: null,
  }),
  computed: {
    ...mapGetters({
      settings: 'settings/settings'
    })
  },
  mounted() {
    this.form = this.settings
  },
  methods: {
    async save() {
      await this.$store.dispatch('settings/update', this.form).then((response) => {
        console.log(response)
      }).catch((error) => console.log(error.response))
    },
    cancel() {
      this.form = this.settings
    },
    showPhotoOverlay(url) {
      if(url) {
        this.photo_overlay = true
        this.photo_url = url
      }
    },
    hidePhotoOverlay() {
      this.photo_overlay = false
      this.photo_url = null
    }
  }
}

</script>
