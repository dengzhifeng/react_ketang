/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:32:45
 */
import { AnyAction } from 'redux';
export interface ProfileState {}
let initialState: ProfileState = {};
function profile(state = initialState, action: AnyAction) {
    switch (action.type) {
        default:
            return state;
    }
}
export default profile;
