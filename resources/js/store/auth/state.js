export default {
    isUserLoggedIn: () => {
        return localStorage.getItem('accessToken')
    },
}
