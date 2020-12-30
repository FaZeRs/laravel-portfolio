<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      max-width="1200"
    >
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="item.links"
          >
            <template v-slot:top>
              <v-toolbar
                flat
              >
                <v-toolbar-title>Project {{ item.title }} Links</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  @click="createItem"
                >
                  New Link
                </v-btn>
              </v-toolbar>
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
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
          <v-container v-if="showForm">
            <v-divider/>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Title*"
                  v-model="editedItem.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Icon*"
                  v-model="editedItem.icon"
                  hint="mdi-github"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Url*"
                  v-model="editedItem.url"
                  hint="https://github.com/FaZeRs/laravel-portfolio"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
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
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      dialog: {
        type: Boolean,
        default: false
      },
      item: {
        type: Object,
        default: {
          title: '',
          links: [],
        },
      }
    },
    data: () => ({
      pagination: {},
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Icon', value: 'icon' },
        { text: 'Url', value: 'url' },
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      // items: [
      //   {
      //     id: 1,
      //     title: 'Github',
      //     icon: 'mdi-github',
      //     url: 'https://github.com/FaZeRs/laravel-portfolio',
      //   }
      // ],
      showForm: false,
      editedIndex: -1,
      editedItem: {
        title: null,
        icon: null,
        url: null,
      },
    }),
    computed: {
      showDialog: {
        get: function () {
          return this.dialog
        },
        set: function (newValue) {
          if(newValue === false) {
            this.$emit('closeDialog')
          }
        }
      }
    },
    methods: {
      createItem() {
        this.showForm = true
      },
      editItem(item) {
        console.log(item)
        this.editedIndex = this.item.links.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.showForm = true
      },
      async deleteItem(item) {
        if (item) {
          await this.$store.dispatch('project/deleteLink', item).then(() => {
            this.item.links.splice(this.item.links.indexOf(item), 1)
          })
        }
      },
      close() {
        this.showForm = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, null)
          this.editedIndex = -1
        })
      },
      async save() {
        if (this.editedIndex > -1) {
          await this.$store.dispatch('project/updateLink', this.editedItem).then((response) => {
            console.log(response)
            Object.assign(this.item.links[this.editedIndex], response)
            this.close()
          }).catch((error) => console.log(error.response))
        } else {
          this.editedItem.project_id = this.item.id
          await this.$store.dispatch('project/createLink', this.editedItem).then((response) => {
            console.log(response)
            this.item.links.push(response)
            this.close()
          })
        }
      },
    }
  }
</script>
