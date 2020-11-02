export const actions = {
  async sendContactMessage ({ payload }) {
    return await this.$axios.post('/contact/send', payload);
  },
}

export default {
  actions,
}
