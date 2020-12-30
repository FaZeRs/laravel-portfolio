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
          <v-toolbar-title>Education</v-toolbar-title>
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
                New Education
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.qualification"
                        label="Qualification"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.organisation"
                        label="Qualification"
                      ></v-text-field>
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
                            v-model="editedItem.from"
                            label="Date From"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.from"
                          @input="editedItem.fromMenu = false"
                          :max="editedItem.to"
                        ></v-date-picker>
                      </v-menu>
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
                            v-model="editedItem.to"
                            label="Date To"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.to"
                          :min="editedItem.from"
                          :max="new Date().toISOString().substr(0, 10)"
                          @input="editedItem.toMenu = false"
                        ></v-date-picker>
                      </v-menu>
                      <v-checkbox
                        v-model="editedItem.ongoing"
                        label="On Going"
                      ></v-checkbox>
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
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
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
  </section>
</template>
<script>

export default {
  name: 'education',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Qualification', align: 'start', value: 'qualification'},
        {text: 'Organisation', value: 'organisation'},
        {text: 'From', value: 'from'},
        {text: 'To', value: 'to'},
        {text: 'On Going', value: 'ongoing'},
        {text: 'Active', value: 'active'},
        {text: 'Created At', value: 'created_at'},
        {text: 'Updated At', value: 'updated_at'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedIndex: -1,
      editedItem: {
        qualification: '',
        organisation: '',
        from: null,
        fromMenu: false,
        to: null,
        toMenu: false,
        ongoing: null,
        active: false,
      },
      defaultItem: {
        qualification: '',
        organisation: '',
        from: null,
        fromMenu: false,
        to: null,
        toMenu: false,
        ongoing: null,
        active: false,
      },
      totalItems: 0,
      items: [],
      loading: true,
      options: {},
      rowsPerPageItems: [10, 20, 30, 40, -1],
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Education' : 'Edit Education'
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
      handler () {
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
        await this.$store.dispatch('education/updateEducation', {id: item.id, active: item.active}).then((response) => {
          const index = this.items.indexOf(item)
          Object.assign(this.items[index], response)
        }).catch((error) => {
          console.log(error.response)
        })
      }
    },

    async deleteItemConfirm() {
      if (this.editedIndex > -1) {
        await this.$store.dispatch('education/deleteEducation', {id: this.editedItem.id}).then(() => {
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
      if (this.editedIndex > -1) {
        await this.$store.dispatch('education/updateEducation', this.editedItem).then((response) => {
          Object.assign(this.items[this.editedIndex], response)
          this.close()
        }).catch((error) => {
          //console.log(error.response)
        })
      } else {
        await this.$store.dispatch('education/createEducation', this.editedItem).then((response) => {
          this.items.push(response)
          this.close()
        }).catch((error) => {
          console.log(error.response)
        })
      }
    },

    async fetchItems() {
      await this.$store.dispatch('education/fetchAdminEducation', this.options).then((response) => {
        if(response.data) {
          this.items = response.data
        }
        if(response.meta && response.meta.total) {
          this.totalItems = response.meta.total
        }

        this.loading = false
      })
    }
  }
}

</script>
