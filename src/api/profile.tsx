// import axios from "axios";

/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-24 12:04:33
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-24 12:19:14
 */
import axios from '@/api';
export function validate() {
    return axios.get('/user/validate');
}
