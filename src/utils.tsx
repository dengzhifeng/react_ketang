/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-27 20:44:35
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-27 22:30:21
 */
export function loadMore(element: HTMLElement, callback: Function) {
    function _loadMore() {
        let clientHeight = element.clientHeight;
        let scrollTop = element.scrollTop; // 向上卷去高度
        let scrollHeight = element.scrollHeight;
        if (clientHeight + scrollTop + 10 >= scrollHeight) {
            callback();
        }
    }
    element.addEventListener('scroll', _loadMore);
}
