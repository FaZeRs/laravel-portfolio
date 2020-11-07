import axios from 'axios';

const options = {};
options.baseURL = process.env.MIX_API_URL;
options.withCredentials = true
const token = sessionStorage.getItem('token');
if (token) {
  options.headers.Authorization = token
}

const http = axios.create(options);

export default http
