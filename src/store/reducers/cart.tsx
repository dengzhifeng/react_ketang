/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:28:19
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 07:19:28
 */
import { AnyAction } from 'redux';
export interface CartState {}
let initialState: CartState = {};
function cart(state = initialState, action: AnyAction): CartState {
    switch (action.type) {
        default:
            return state;
    }
}
export default cart;
