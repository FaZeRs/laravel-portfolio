import ApiService from "./api.service";

const ExperienceService = {
  all (params) {
    return ApiService.get('experience', params)
  },
  get (id) {
    return ApiService.get(`experience/${id}`)
  }
}

export default ExperienceService
