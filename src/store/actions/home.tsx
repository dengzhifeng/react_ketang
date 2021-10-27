/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-21 07:38:30
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-27 20:31:44
 */
import { getLessons, getSliders } from '@/api/home';
import * as actionTypes from '@/store/action-types';
// import { getLessons, getSliders } from '@/api/home';
export default {
    setCurrentCategory(currentCategory: string) {
        return {
            type: actionTypes.SET_CURRENT_CATEGORY,
            payload: currentCategory
        };
    },
    getSliders() {
        return {
            type: actionTypes.GET_SLIDERS,
            payload: getSliders()
        };
    },
    getLessons() {
        return function (dispatch: any, getState: any) {
            (async function () {
                let {
                    currentCategory,
                    lessons: { hasMore, offset, limit, loading }
                } = getState().home;
                if (hasMore && !loading) {
                    // 还有更多 并且不是处于加载中
                    dispatch({
                        type: actionTypes.SET_LESSONS_LOADING,
                        payload: true
                    });
                    let result = await getLessons(
                        currentCategory,
                        offset,
                        limit
                    );
                    dispatch({
                        type: actionTypes.SET_LESSONS,
                        payload: result.data
                    });
                }
            })();
        };
    }
};
