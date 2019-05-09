import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'http://localhost/api_token/public/api';
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common.Authorization = '1513107987f537dfe724451b145b9d49018529e2b82d8da84796dcdc7e96b11b';

export const loginRequest = async (email, password) => instance.post('/login', {
  email,
  password
});
export const userRequest = async () => instance.get('/user');
