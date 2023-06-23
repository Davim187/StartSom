import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2003/',
});

export default api;
