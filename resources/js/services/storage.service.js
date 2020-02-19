const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
class TokenService {
  static getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }

  static saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  }

  static removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  }

  static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  }

  static saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  }

  static removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }

}

export { TokenService }
