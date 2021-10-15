/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:20:39
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:56:44
 */
import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
let store = applyMiddleware(
    routerMiddleware(history),
    thunk,
    promise,
    logger
)(createStore)(rootReducer);

export default store;
