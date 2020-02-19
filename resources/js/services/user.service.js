import ApiService from "./api.service";
import { TokenService } from './storage.service'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

class UserService {
  static async login (email, password) {
    try {
      const response = await ApiService.post('login', {email, password})
      TokenService.saveToken(response.data.access_token)
      TokenService.saveRefreshToken(response.data.access_token)
      ApiService.setHeader()

      return response.data
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  }

  static async logout() {
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    ApiService.removeHeader()
  }
}

export default UserService

export { UserService, AuthenticationError }
