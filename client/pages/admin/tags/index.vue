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
          <v-toolbar-title>Tags</v-toolbar-title>
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
                New Tag
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
                        v-model="editedItem.title"
                        label="Title"
                      ></v-text-field>
                      <v-text-field v-model="editedItem.color" label="Color" hide-details>
                        <template v-slot:append>
                          <v-menu v-model="editedItem.color_menu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                            <template v-slot:activator="{ on }">
                              <div :style="swatchStyle" v-on="on" />
                            </template>
                            <v-card>
                              <v-card-text class="pa-0">
                                <v-color-picker v-model="editedItem.color" flat />
                              </v-card-text>
                            </v-card>
                          </v-menu>
                        </template>
                      </v-text-field>
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
                <v-btn color="error" @click="deleteItemConfirm">Delete</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.color="{ item }">
        <v-chip
          :color="item.color"
          small
          dark
        >
          <v-icon small>
            mdi-tag-outline
          </v-icon>
        </v-chip>
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
  name: 'tags',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Title', align: 'start', value: 'title'},
        {text: 'Color', align: 'start', value: 'color'},
        {text: 'Active', value: 'active'},
        {text: 'Created At', value: 'created_at'},
        {text: 'Updated At', value: 'updated_at'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        color: '#FF0000FF',
        active: false,
        color_menu: false,
      },
      defaultItem: {
        title: '',
        color: '#FF0000FF',
        active: false,
        color_menu: false,
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
      return this.editedIndex === -1 ? 'New Tag' : 'Edit Tag'
    },
    swatchStyle() {
      const {color, menu} = this.editedItem
      console.log(color);
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }
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
        await this.$store.dispatch('tag/updateTag', {id: item.id, active: item.active}).then((response) => {
          const index = this.items.indexOf(item)
          Object.assign(this.items[index], response)
        })
      }
    },

    async deleteItemConfirm() {
      if (this.editedIndex > -1) {
        await this.$store.dispatch('tag/deleteTag', {id: this.editedItem.id}).then(() => {
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
        await this.$store.dispatch('tag/updateTag', this.editedItem).then((response) => {
          Object.assign(this.items[this.editedIndex], response)
          this.close()
        }).catch((error) => console.log(error.response))
      } else {
        await this.$store.dispatch('tag/createTag', this.editedItem).then((response) => {
          this.items.unshift(response)
          this.items.pop()
          this.close()
        })
      }
    },

    async fetchItems() {
      await this.$store.dispatch('tag/fetchAdminTags', this.options).then((response) => {
        if(response.data) {
          this.items = response.data
        }
        if(response.meta && response.meta.total) {
          this.totalItems = response.meta.total
        }

        this.loading = false
      })
    },
  }
}

</script>
