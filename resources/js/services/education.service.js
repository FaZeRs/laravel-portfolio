import ApiService from "./api.service";

const EducationService = {
  all (params) {
    return ApiService.get('education', params)
  },
  get (id) {
    return ApiService.get(`education/${id}`)
  }
}

export default EducationService
