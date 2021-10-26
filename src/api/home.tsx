// import axios from "axios";

/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-24 12:04:33
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 08:00:58
 */
import axios from '@/api';
export function getSliders() {
    return axios.get('/slider/list');
}
