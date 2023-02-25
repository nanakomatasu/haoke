import axios from "axios";
const request = axios.create({
  baseURL: "http://liufusong.top:8080",
  timeout: 10000,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default request;
