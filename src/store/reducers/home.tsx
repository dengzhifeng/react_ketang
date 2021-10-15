/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:31:22
 */
import { AnyAction } from 'redux';
export interface HomeState {}
let initialState: HomeState = {};
function home(state = initialState, action: AnyAction) {
    switch (action.type) {
        default:
            return state;
    }
}
export default home;
