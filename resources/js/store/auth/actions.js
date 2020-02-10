import jwt from '~/http/requests/auth/jwt'
import router from '~/router'

export default {
    login({ commit }, payload) {
      return new Promise((resolve,reject) => {
        jwt.login(payload.userDetails.email, payload.userDetails.password)
          .then(response => {

            // If there's user data in response
            if(response.data.userData) {
              // Navigate User to homepage
              router.push(router.currentRoute.query.to || '/')

              // Set accessToken
              localStorage.setItem("accessToken", response.data.accessToken)

              // Update user details
              commit('UPDATE_USER_INFO', response.data.userData, {root: true})

              // Set bearer token in axios
              commit("SET_BEARER", response.data.accessToken)

              resolve(response)
            }else {
              reject({message: "Wrong Email or Password"})
            }

          })
          .catch(error => { reject(error) })
      })
    },
    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
}
