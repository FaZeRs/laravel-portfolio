import http from '~/plugins/axios';

export const actions = {
  async sendContactMessage ({ payload }) {
    return await http.post('/contact/send', payload);
  },
}

export default {
  actions,
}
