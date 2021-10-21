/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-21 07:38:30
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-21 07:41:04
 */
import * as actionTypes from '@/store/action-types';
export default {
    setCurrentCategory(currentCategory: string) {
        return {
            type: actionTypes.SET_CURRENT_CATEGORY,
            payload: currentCategory
        };
    }
};
