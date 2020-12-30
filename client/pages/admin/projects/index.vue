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
          <v-toolbar-title>Projects</v-toolbar-title>
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
                New Project
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
                      <v-autocomplete
                        :items="categories"
                        :loading="loading_categories"
                        v-model="editedItem.category_id"
                        item-text="title"
                        item-value="id"
                        label="Category">
                      </v-autocomplete>
                      <v-textarea
                        v-model="editedItem.description"
                        label="Description"
                      ></v-textarea>
                      <v-select
                        :items="statuses"
                        v-model="editedItem.status"
                        label="Status"
                      ></v-select>
                      <v-autocomplete
                        v-model="editedItem.tags"
                        :items="tags"
                        :loading="loading_tags"
                        item-text="title"
                        item-value="id"
                        chips
                        label="Tags"
                        multiple
                      ></v-autocomplete>
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
      <template v-slot:item.status="{ item }">
        <v-chip v-if="item.status === 1" small dark color="orange">Open</v-chip>
        <v-chip v-else-if="item.status === 2" small color="yellow">Scheduled</v-chip>
        <v-chip v-else-if="item.status === 3" small dark color="blue">In Development</v-chip>
        <v-chip v-else-if="item.status === 4" small dark color="red">Cancelled</v-chip>
        <v-chip v-else-if="item.status === 5" small dark color="green">Completed</v-chip>
        <v-chip v-else small dark>Unknown</v-chip>
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
          @click="editLinks(item)"
        >
          mdi-link
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
    <ProjectLinks :dialog="linksDialog" :item="editedItem" @closeDialog="closeLinks"/>
  </section>
</template>
<script>
import ProjectLinks from '~/components/ProjectLinks'

export default {
  name: 'projects',
  layout: 'admin',
  middleware: 'auth',
  components: {
    ProjectLinks
  },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Title', align: 'start', value: 'title'},
        {text: 'Category',value: 'category.title', sortable: false},
        {text: 'Status', value: 'status'},
        {text: 'Active', value: 'active'},
        {text: 'Created At', value: 'created_at'},
        {text: 'Updated At', value: 'updated_at'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        category_id: null,
        description: '',
        status: 0,
        order: 0,
        tags: [],
        links: [],
        active: false,
      },
      defaultItem: {
        title: '',
        category_id: null,
        description: '',
        status: 0,
        order: 0,
        tags: [],
        links: [],
        active: false,
      },
      categories: [],
      loading_categories: true,
      tags: [],
      loading_tags: true,
      statuses: [
        {value: 0, text: 'Unknown'},
        {value: 1, text: 'Open'},
        {value: 2, text: 'Scheduled'},
        {value: 3, text: 'In Development'},
        {value: 4, text: 'Cancelled'},
        {value: 5, text: 'Completed'},
      ],
      totalItems: 0,
      items: [],
      loading: true,
      options: {},
      rowsPerPageItems: [10, 20, 30, 40, -1],
      linksDialog: false,
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Project' : 'Edit Project'
    },
  },
  mounted() {
    this.fetchItems()
  },
  watch: {
    dialog(val) {
      if(val) {
        this.fetchCategories()
        this.fetchTags()
      }
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
      this.fetchCategories()
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.fetchCategories()
      this.dialogDelete = true
    },

    async disableItem(item) {
      if (item) {
        item.active = !item.active
        await this.$store.dispatch('project/updateProject', {id: item.id, active: item.active}).then((response) => {
          const index = this.items.indexOf(item)
          Object.assign(this.items[index], response)
        })
      }
    },

    async deleteItemConfirm() {
      if (this.editedIndex > -1) {
        await this.$store.dispatch('project/deleteProject', {id: this.editedItem.id}).then(() => {
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
        await this.$store.dispatch('project/updateProject', this.editedItem).then((response) => {
          Object.assign(this.items[this.editedIndex], response)
          this.close()
        }).catch((error) => console.log(error.response))
      } else {
        await this.$store.dispatch('project/createProject', this.editedItem).then((response) => {
          this.items.push(response)
          this.close()
        })
      }
    },

    async fetchItems() {
      await this.$store.dispatch('project/fetchAdminProjects', this.options).then((response) => {
        if (response.data) {
          this.items = response.data
        }
        if (response.meta && response.meta.total) {
          this.totalItems = response.meta.total
        }

        this.loading = false
      })
    },
    async fetchCategories() {
      if (this.categories.length === 0) {
        this.categories = await this.$store.dispatch('category/fetchAdminCategories', {})
      }
      this.loading_categories = false
    },
    async fetchTags() {
      if (this.tags.length === 0) {
        this.tags = await this.$store.dispatch('tag/fetchAdminTags', {})
      }
      this.loading_tags = false
    },
    editLinks(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.linksDialog = true
    },
    closeLinks() {
      this.linksDialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    }
  }
}

</script>
