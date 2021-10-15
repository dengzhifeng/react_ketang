/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 15:51:16
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 18:07:43
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './style/common.less';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Tabs from './components/Tabs';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Profile from './routes/Profile';
import { ConnectedRouter } from 'connected-react-router';
import history from './store/history';
let ele = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <main className="main-container">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Redirect to="/" />
                    </Switch>
                    <Tabs></Tabs>
                </main>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
);
ReactDOM.render(ele, document.getElementById('root'));
