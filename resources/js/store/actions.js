let actions = {
  fetchProjects ({ commit }) {
    axios.get('/api/projects')
      .then(res => {
        commit('FETCH_PROJECTS', res.data)
      }).catch(err => {
        console.log(err)
      })
  },
  fetchCategories ({ commit }) {
    axios.get('/api/categories')
      .then(res => {
        commit('FETCH_CATEGORIES', res.data)
      }).catch(err => {
        console.log(err)
      })
  }
}

export default actions
