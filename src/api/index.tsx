/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-24 12:05:01
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-24 12:14:14
 */
import axios from 'axios';
axios.defaults.baseURL =
    process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8899';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use(
    (config) => {
        // 每次发送请求之前要把token放在请求头里面
        let access_token = sessionStorage.getItem('access_token');
        if (access_token) {
            config.headers = { Authorization: `Bearer ${access_token}` };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response.data, // response: {data,headers, config}
    (error) => Promise.reject(error)
);
export default axios;
