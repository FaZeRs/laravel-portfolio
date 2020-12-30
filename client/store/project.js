import Project from "~/models/Project";
import Link from "~/models/Link";

export const state = () => ({
  projects: [],
})

export const actions = {
  async fetchAdminProjects({commit}, payload) {
    try {
      let project = Project.include('category', 'tags', 'links', 'media')
      const { sortBy, sortDesc, page, itemsPerPage } = payload
      if(page) {
        project.page(page)
      }
      if(itemsPerPage) {
        project.limit(itemsPerPage)
      }
      if (sortBy && sortBy.length === 1 && sortDesc && sortDesc.length === 1) {
        let column = sortBy[0]
        const desc = sortDesc[0]
        if(desc) {
          column = '-' + column
        }
        project.orderBy(column)
      }
      return await project.get()
    } catch (error) {
      throw error
    }
  },
  async updateProject({}, payload) {
    try {
      const project = await Project.find(payload.id)
      if (payload.hasOwnProperty('title')) {
        project.title = payload.title
      }
      if (payload.hasOwnProperty('category_id')) {
        project.category_id = payload.category_id
      }
      if (payload.hasOwnProperty('description')) {
        project.description = payload.description
      }
      if (payload.hasOwnProperty('status')) {
        project.status = payload.status
      }
      if (payload.hasOwnProperty('order')) {
        project.order = payload.order
      }
      if (payload.hasOwnProperty('tags')) {
        project.tags = payload.tags
      }
      if (payload.hasOwnProperty('active')) {
        project.active = payload.active
      }
      return await project.save()
    } catch (error) {
      throw error
    }
  },
  async createProject({}, payload) {
    try {
      const project = new Project(payload)
      return await project.save()
    } catch (error) {
      throw error
    }
  },
  async deleteProject({}, payload) {
    try {
      const project = await Project.find(payload.id)
      return await project.delete()
    } catch (error) {
      throw error
    }
  },
  async updateLink({}, payload) {
    try {
      const link = await Link.find(payload.id)
      if (payload.hasOwnProperty('title')) {
        link.title = payload.title
      }
      if (payload.hasOwnProperty('url')) {
        link.url = payload.url
      }
      if (payload.hasOwnProperty('icon')) {
        link.icon = payload.icon
      }
      return await link.save()
    } catch (error) {
      throw error
    }
  },
  async createLink({}, payload) {
    try {
      const link = new Link(payload)
      return await link.save()
    } catch (error) {
      throw error
    }
  },
  async deleteLink({}, payload) {
    console.log('deleteLink', payload)
    try {
      const link = await Link.find(payload.id)
      return await link.delete()
    } catch (error) {
      throw error
    }
  }
}

export const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  }
}

export const getters = {
  projects (state) {
    return state.projects
  },
}
