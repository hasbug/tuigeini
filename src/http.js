import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.github.com';

// http request 传输前拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor 返回值时拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default axios;