/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-21 07:25:58
 */
import { AnyAction } from 'redux';
import * as actionTypes from '@/store/action-types';
export interface HomeState {
    currentCategory: string;
}
let initialState: HomeState = {
    currentCategory: 'all'
};
function home(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload };
        default:
            return state;
    }
}
export default home;
