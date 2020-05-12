import axios from "axios";
import config from "./config"

//创建axios实例
const axiosIns = axios.create({
  baseURL:config.baseUrl,
  timeout:config.timeout
});

//为axios实例添加拦截器
axiosIns.interceptors.request.use(axiosConfig => {
  return axiosConfig;
})
axiosIns.interceptors.response.use((response)=>{
  return response.data;
},(error)=>{
  return Promise.reject(error)
})

//将axios实例暴露出去
export default axiosIns;
