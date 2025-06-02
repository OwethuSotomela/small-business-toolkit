import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // or your live server URL
});

// Optional: attach token if using auth
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;
