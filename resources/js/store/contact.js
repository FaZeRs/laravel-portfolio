import axios from 'axios';

export const actions = {
  async sendContactMessage ({ payload }) {
    return await axios.post('/contact/send', payload);
  },
}

export default {
  actions,
}
