import store from '~/store'
import { FETCH_SETTINGS } from '../store/actions.type'

export default async (to, from, next) => {
  try {
    await store.dispatch(FETCH_SETTINGS, {})
  } catch (e) {
  }
  store.subscribe((mutation, state) => {
    if(mutation.type === 'setLocale') {
      store.dispatch(FETCH_SETTINGS, {})
    }
  });

  next()
}
