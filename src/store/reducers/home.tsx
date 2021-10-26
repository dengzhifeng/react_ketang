/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 08:02:31
 */
import { AnyAction } from 'redux';
import * as actionTypes from '@/store/action-types';
import Slider from '@/typings/slider';
export interface HomeState {
    currentCategory: string;
    sliders: Slider[];
}
let initialState: HomeState = {
    currentCategory: 'all',
    sliders: []
};
function home(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload };
        case actionTypes.GET_SLIDERS:
            return { ...state, sliders: action.payload.data };
        default:
            return state;
    }
}
export default home;
