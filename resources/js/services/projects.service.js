import ApiService from "./api.service";

const ProjectsService = {
  all (params) {
    return ApiService.get('projects', params)
  },
  get (slug) {
    return ApiService.get(`projects/${slug}`)
  }
}

export default ProjectsService
