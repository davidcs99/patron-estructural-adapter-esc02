import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
  // Puedes agregar headers globales aquí si es necesario
  // headers: {'Authorization': 'Bearer ' + token}
});

export default axiosInstance;