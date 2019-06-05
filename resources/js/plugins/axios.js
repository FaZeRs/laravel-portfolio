import axios from 'axios'
import store from '~/store'

// Request interceptor
axios.interceptors.request.use(request => {
  const locale = store.getters['locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  return request
})
