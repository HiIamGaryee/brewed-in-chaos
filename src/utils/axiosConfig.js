import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
console.log("Axios base URL:", baseURL);


const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api; 