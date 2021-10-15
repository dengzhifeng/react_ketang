/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:09:35
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:59:08
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
import './index.less';
function Tabs() {
    return (
        <footer>
            <NavLink exact to="/">
                <HomeOutlined />
                <span>首页</span>
            </NavLink>
            <NavLink exact to="/cart">
                <ShoppingCartOutlined />
                <span>购物车</span>
            </NavLink>
            <NavLink exact to="/profile">
                <UserOutlined />
                <span>个人中心</span>
            </NavLink>
        </footer>
    );
}
export default withRouter(Tabs);
