/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:25:42
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-21 08:15:04
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
let rootReducer = combineReducers(reducers);
export default rootReducer;
