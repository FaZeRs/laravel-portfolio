import store from '~/store'

export default async (to, from, next) => {
  try {
    await store.dispatch('settings/fetchAll')
  } catch (e) {
  }
  store.subscribe((mutation, state) => {
    if(mutation.type === 'setLocale') {
      store.dispatch('settings/fetchAll')
    }
  });

  next()
}
