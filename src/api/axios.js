import axios from 'axios';

const baseUrl = '/api';


// axios 二次封装的核心逻辑

class HttpRequests {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {}
        }
        return config;
    }
    interception(instance) {
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(options) {
        //创建axios实例
        const instance = axios.create(options);
        options = { ...this.getInsideConfig(), ...options }
        // 实例拦截器的绑定
        this.interception(instance);
        return instance(options);
    }
}

const http = new HttpRequests(baseUrl);
export default http;


// 错误的写法
// export default new HttpRequests(baseUrl);
