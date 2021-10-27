/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-27 20:37:51
 */
import { AnyAction } from 'redux';
import * as actionTypes from '@/store/action-types';
import Slider from '@/typings/slider';
import Lesson from '@/typings/lesson';
export interface Lessons {
    loading: boolean;
    list: Lessons[];
    hasMore: boolean; // 是否有更多
    offset: number;
    limit: number;
}
export interface HomeState {
    currentCategory: string;
    sliders: Slider[];
    lessons: Lessons;
}
let initialState: HomeState = {
    currentCategory: 'all',
    sliders: [],
    lessons: {
        loading: false,
        list: [],
        hasMore: true,
        offset: 0,
        limit: 5
    }
};
function home(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload };
        case actionTypes.GET_SLIDERS:
            return { ...state, sliders: action.payload };
        case actionTypes.SET_LESSONS_LOADING:
            return {
                ...state,
                lessons: { ...state.lessons, loading: action.payload }
            };
        case actionTypes.SET_LESSONS:
            return {
                ...state,
                lessons: {
                    ...state.lessons,
                    loading: false,
                    hasMore: action.payload.hasMore,
                    list: [...state.lessons.list, ...action.payload.list],
                    offset: state.lessons.offset + action.payload.list.length
                }
            };
        default:
            return state;
    }
}
export default home;
