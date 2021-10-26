/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 22:10:42
 */
import { AnyAction } from 'redux';
import * as actionTypes from '@/store/action-types';
import Slider from '@/typings/slider';
import Lesson from '@/typings/lesson';
export interface HomeState {
    currentCategory: string;
    sliders: Slider[];
    lessons: Lesson[];
}
let initialState: HomeState = {
    currentCategory: 'all',
    sliders: [],
    lessons: []
};
function home(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload };
        case actionTypes.GET_SLIDERS:
            return { ...state, sliders: action.payload };
        default:
            return state;
    }
}
export default home;
