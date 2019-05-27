import store from '~/store'
import { FETCH_SETTINGS } from '../store/actions.type'

export default async (to, from, next) => {
  if (Array.isArray(store.getters['settings']) && !store.getters['settings'].length) {
    try {
      await store.dispatch(FETCH_SETTINGS, {})
    } catch (e) {

    }
  }

  next()
}
