<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="items"
      sort-by="created_at"
      sort-desc
      class="elevation-1"
      :options.sync="options"
      :loading="loading"
      :server-items-length="totalItems"
      :footer-props="{
        'items-per-page-options': rowsPerPageItems
      }"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Experience</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Experience
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <validation-observer ref="observer" v-slot="{ invalid, validated, passes }">
                <v-form>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                        >
                          <validation-provider
                            name="position"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              v-model="editedItem.position"
                              label="Position"
                              :error-messages="errors"
                            ></v-text-field>
                          </validation-provider>
                          <validation-provider
                            name="employer"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              v-model="editedItem.employer"
                              label="Employer"
                              :error-messages="errors"
                            ></v-text-field>
                          </validation-provider>
                          <validation-provider
                            name="website"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              v-model="editedItem.website"
                              label="Website"
                              :error-messages="errors"
                            ></v-text-field>
                          </validation-provider>
                          <validation-provider
                            name="date_from"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-menu
                              v-model="editedItem.fromMenu"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="editedItem.date_from"
                                  label="Date From"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  :error-messages="errors"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="editedItem.date_from"
                                @input="editedItem.fromMenu = false"
                                :max="editedItem.date_to"
                              ></v-date-picker>
                            </v-menu>
                          </validation-provider>
                          <validation-provider
                            name="date_to"
                            v-slot="{ errors }"
                          >
                            <v-menu
                              v-model="editedItem.toMenu"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="editedItem.date_to"
                                  label="Date To"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  :error-messages="errors"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="editedItem.date_to"
                                :min="editedItem.date_from"
                                :max="new Date().toISOString().substr(0, 10)"
                                @input="editedItem.toMenu = false"
                              ></v-date-picker>
                            </v-menu>
                          </validation-provider>
                          <validation-provider
                            name="ongoing"
                            v-slot="{ errors }"
                          >
                            <v-checkbox
                              v-model="editedItem.ongoing"
                              label="On Going"
                              :error-messages="errors"
                            ></v-checkbox>
                          </validation-provider>
                          <validation-provider
                            name="image"
                            v-slot="{ errors }"
                          >
                            <v-file-input
                              accept="image/png, image/jpeg, image/bmp"
                              v-model="editedItem.image"
                              placeholder="Pick a logo"
                              prepend-icon=""
                              label="Logo"
                              :error-messages="errors"
                            ></v-file-input>
                          </validation-provider>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="success"
                      @click="passes(save)"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </validation-observer>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="closeDelete">Cancel</v-btn>
                <v-btn color="error" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.active="{ item }">
        <v-chip
          v-if="item.active"
          color="green"
          small
          dark
        >
          <v-icon small>
            mdi-check-bold
          </v-icon>
        </v-chip>
        <v-chip
          v-else
          color="red"
          small
          dark
        >
          <v-icon small>
            mdi-close-thick
          </v-icon>
        </v-chip>
      </template>
      <template v-slot:item.ongoing="{ item }">
        <v-chip
          v-if="item.ongoing"
          color="green"
          small
          dark
        >
          <v-icon small>
            mdi-check-bold
          </v-icon>
        </v-chip>
        <v-chip
          v-else
          color="red"
          small
          dark
        >
          <v-icon small>
            mdi-close-thick
          </v-icon>
        </v-chip>
      </template>
      <template v-slot:item.logo="{ item }">
        <v-avatar @click="showLogoOverlay(item)" v-if="item.logo && item.logo.thumb">
          <img
            :src="item.logo.thumb"
            :alt="item.employer"
          >
        </v-avatar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          class="mr-2"
          @click="disableItem(item)"
        >
          mdi-cancel
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="fetchItems"
        >
          Refresh
        </v-btn>
      </template>
    </v-data-table>
    <v-overlay :value="logo_overlay" v-if="logo_src">
      <v-img
        v-click-outside="hideLogoOverlay"
        :src="logo_src"
      ></v-img>
    </v-overlay>
  </section>
</template>
<script>
  import {ValidationObserver, ValidationProvider} from 'vee-validate';

  export default {
    name: 'experience',
    layout: 'admin',
    middleware: 'auth',
    components: {
      ValidationObserver,
      ValidationProvider
    },
    head() {
      return {
        title: this.$t('experience'),
      }
    },
    data() {
      return {
        dialog: false,
        dialogDelete: false,
        headers: [
          {text: 'ID', value: 'id'},
          {text: 'Position', align: 'start', value: 'position'},
          {text: 'Employer', align: 'start', value: 'employer'},
          {text: 'Website', align: 'start', value: 'website'},
          {text: 'Date From', align: 'start', value: 'date_from'},
          {text: 'Date To', align: 'start', value: 'date_to'},
          {text: 'On Going', align: 'start', value: 'ongoing'},
          {text: 'Logo', value: 'logo'},
          {text: 'Active', value: 'active'},
          {text: 'Created At', value: 'created_at'},
          {text: 'Updated At', value: 'updated_at'},
          {text: 'Actions', value: 'actions', sortable: false},
        ],
        editedIndex: -1,
        editedItem: {
          position: '',
          employer: '',
          website: '',
          date_from: null,
          fromMenu: false,
          date_to: null,
          toMenu: false,
          ongoing: false,
          logo: null,
          image: null,
          active: false,
        },
        defaultItem: {
          position: '',
          employer: '',
          website: '',
          date_from: null,
          fromMenu: false,
          date_to: null,
          toMenu: false,
          ongoing: false,
          logo: null,
          image: null,
          active: false,
        },
        totalItems: 0,
        items: [],
        loading: true,
        options: {},
        rowsPerPageItems: [10, 20, 30, 40, -1],
        logo_overlay: false,
        logo_src: null
      }
    },

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Experience' : 'Edit Experience'
      },
    },
    mounted() {
      this.fetchItems()
    },
    watch: {
      dialog(val) {
        val || this.close()
      },
      dialogDelete(val) {
        val || this.closeDelete()
      },
      options: {
        handler() {
          this.fetchItems()
        },
        deep: true,
      },
    },
    methods: {
      editItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async disableItem(item) {
        if (item) {
          item.active = !item.active
          await this.$store.dispatch('experience/updateExperience', {id: item.id, active: item.active}).then((response) => {
            const index = this.items.indexOf(item)
            Object.assign(this.items[index], response)
          })
        }
      },

      async deleteItemConfirm() {
        if (this.editedIndex > -1) {
          await this.$store.dispatch('experience/deleteExperience', {id: this.editedItem.id}).then(() => {
            this.items.splice(this.editedIndex, 1)
            this.closeDelete()
          })
        }
      },

      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save() {
        const isValid = await this.$refs.observer.validate();
        if (!isValid) {
          return;
        }
        if (this.editedIndex > -1) {
          await this.$store.dispatch('experience/updateExperience', this.editedItem).then((response) => {
            Object.assign(this.items[this.editedIndex], response)
            requestAnimationFrame(() => {
              this.$refs.observer.reset();
            });
            this.close()
          }).catch((error) => {
            if (error.response && error.response.status === 422 && this.$refs.observer) {
              this.$refs.observer.setErrors(error.response.data.errors);
            }
          })
        } else {
          await this.$store.dispatch('experience/createExperience', this.editedItem)
            .then((response) => {
              this.items.push(response)
              requestAnimationFrame(() => {
                this.$refs.observer.reset();
              });
              this.close()
            }).catch((error) => {
              console.log(error.response)
              if (error.response && error.response.status === 422 && this.$refs.observer) {
                this.$refs.observer.setErrors(error.response.data.errors);
              }
            })
        }
      },

      async fetchItems() {
        await this.$store.dispatch('experience/fetchAdminExperience', this.options).then((response) => {
          if (response.data) {
            this.items = response.data
          }
          if (response.meta && response.meta.total) {
            this.totalItems = response.meta.total
          }

          this.loading = false
        })
      },

      showLogoOverlay(item) {
        if (item.logo && item.logo.src) {
          this.logo_overlay = true
          this.logo_src = item.logo.src
        }
      },

      hideLogoOverlay() {
        this.logo_overlay = false
        this.logo_src = null
      }
    }
  }

</script>
