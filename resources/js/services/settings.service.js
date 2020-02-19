import ApiService from "./api.service";

const SettingsService = {
  all (params) {
    return ApiService.get('settings', params)
  },
  get (key) {
    return ApiService.get(`settings/${key}`)
  }
}

export default SettingsService
