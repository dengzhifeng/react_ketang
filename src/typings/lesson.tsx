/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-26 21:51:13
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 22:03:56
 */
export default interface Lesson {
    id: string;
    title: string;
    video: string;
    poster: string; // 海报
    url: string;
    price: string; // 价格
    category: string;
}
interface LessonResult {
    success: boolean;
}
