/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:25:42
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 07:47:13
 */
import { combineReducers, ReducersMapObject, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import home from './home';
import cart from './cart';
import profile from './profile';
let reducers: ReducersMapObject = {
    router: connectRouter(history),
    home,
    cart,
    profile
};
export type CombinedState = {
    // key就是reducers所有key的集合， 值就是reducer函数返回值的类型
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};
let rootReducer = combineReducers(reducers);
export default rootReducer;
