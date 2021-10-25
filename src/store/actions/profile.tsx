/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-24 11:27:26
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-24 12:28:28
 */
import * as actionTypes from '@/store/action-types';
import { validate } from '@/api/profile';
import { AnyAction } from 'redux';
// import { getLessons, getSliders } from '@/api/home';
export default {
    validate(): AnyAction {
        return {
            type: actionTypes.USER_VALIDATE,
            payload: validate
        };
    }
};
