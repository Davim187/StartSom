import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2008/',
});

export default api;
