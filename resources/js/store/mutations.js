let mutations = {
  FETCH_PROJECTS(state, projects) {
    return state.projects = projects
  },
  FETCH_CATEGORIES(state, categories) {
    return state.categories = categories
  }
}
export default mutations
