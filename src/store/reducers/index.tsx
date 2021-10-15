/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:25:42
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:48:13
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import home from './home';
import cart from './cart';
import profile from './profile';
let reducers = {
    router: connectRouter(history),
    home,
    cart,
    profile
};
let rootReducer = combineReducers(reducers);
export default rootReducer;
