// import axios from "axios";

/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-24 12:04:33
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 21:49:36
 */
import axios from '@/api';
export function getSliders() {
    let data = [
        {
            url: 'https://i.picsum.photos/id/616/300/200.jpg?hmac=a5QKUerD2fiqUe2YznpncEog2SYE-6vCmNFs9HGSpHM'
        },
        {
            url: 'https://i.picsum.photos/id/998/300/200.jpg?hmac=ABcJlM1FNcyP3AfTFRqfa64HxavGYS_EloO3wVKI6WY'
        },
        {
            url: 'https://i.picsum.photos/id/10/300/200.jpg?hmac=menX_NrjPibibYJMbqajfiKneTyaTtCwrgMaV3g6xPQ'
        }
    ];
    return data;
    return axios.get('/slider/list');
}

export function getLessons(
    currentCategory: string = 'all',
    offset: number, // 页码
    limit: number // 每页条数
) {
    return axios.get(
        `/lesson/list?category=${currentCategory}&offset=${offset}&limit=${limit}`
    );
}
