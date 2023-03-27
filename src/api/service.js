import axios from 'axios';

export default axios.create({
  baseURL: 'https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
