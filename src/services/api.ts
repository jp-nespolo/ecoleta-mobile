import axios from 'axios';
import configURL from '../config';
const api = axios.create({
  baseURL: configURL.serverURL,
});

export default api;
