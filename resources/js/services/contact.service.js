import ApiService from "./api.service";

const ContactService = {
  send(data) {
    return ApiService.post('contact/send', data);
  },
}

export default ContactService
