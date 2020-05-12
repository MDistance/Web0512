import axios from "axios";

axios.defaults.baseURL="https://api.github.com";
axios.interceptors.request.use(function (config) {
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default axios;
