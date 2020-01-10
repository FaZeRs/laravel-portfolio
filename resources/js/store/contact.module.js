import {
  ContactService
} from '~/common/api.service'
import {
  SEND_CONTACT
} from './actions.type'

export const actions = {
  async [SEND_CONTACT](context, payload) {
    const { data } = await ContactService.send(payload);
    return data;
  },
}

export default {
  actions,
}
