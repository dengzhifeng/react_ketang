/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:32:57
 */
import { AnyAction } from 'redux';
export interface CartState {}
let initialState: CartState = {};
function cart(state = initialState, action: AnyAction) {
    switch (action.type) {
        default:
            return state;
    }
}
export default cart;
