import ApiService from "./api.service";

const CategoriesService = {
  all (params) {
    return ApiService.get('categories', params)
  },
  get (slug) {
    return ApiService.get(`categories/${slug}`)
  }
}

export default CategoriesService
