import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
