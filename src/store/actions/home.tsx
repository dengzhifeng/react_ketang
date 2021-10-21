/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-21 07:38:30
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 07:45:08
 */
import * as actionTypes from '@/store/action-types';
// import { getLessons, getSliders } from '@/api/home';
export default {
    setCurrentCategory(currentCategory: string) {
        return {
            type: actionTypes.SET_CURRENT_CATEGORY,
            payload: currentCategory
        };
    }
};
