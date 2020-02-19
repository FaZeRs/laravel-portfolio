import ContactService from '~/services/contact.service'

export const actions = {
  async send (context, payload) {
    const { data } = await ContactService.send(payload);
    return data;
  },
}

export default {
  namespaced: true,
  actions,
}
