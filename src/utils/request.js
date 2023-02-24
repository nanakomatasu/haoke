import axios from "axios";
const request=axios.create({
  baseURL:'http://127.0.0.1',
  timeout:3000
})
request.interceptors.request.use((config) => {
  return config
},err => {
  return Promise.reject(err)
})

request.interceptors.response.use((config) => {
  return config
},err => {
  return Promise.reject(err)
})
export default request