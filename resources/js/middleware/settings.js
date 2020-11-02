import store from '~/store'

export default async (to, from, next) => {
  await store.dispatch('fetchSettings')
  store.subscribe((mutation, state) => {
    if(mutation.type === 'setLocale') {
      store.dispatch('fetchSettings')
    }
  });

  next()
}
