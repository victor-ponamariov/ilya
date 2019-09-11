import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

// const instance = axios.create({
//   baseURL: 'https://api.coincap.io/v2/assets'
// })

export default axiosInstance;
// export default instance;