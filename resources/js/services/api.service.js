import axios from 'axios'
import Cookies from "js-cookie";
import { TokenService } from '../services/storage.service'

const ApiService = {
  init (baseURL) {
    axios.defaults.baseURL = baseURL
    axios.defaults.headers.common['Content-Language'] = Cookies.get('locale') || 'en'
  },

  setHeader() {
    axios.defaults.headers.common['Authorization'] = TokenService.getToken()
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  get(resource, data) {
    return axios.get(resource, data)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  customRequest(data) {
    return axios(data)
  }
}

export default ApiService








