/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-20 07:35:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-20 07:55:56
 */
import React from 'react';
import { BarsOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.jpg';
import './index.less';
function HomeHeader(props) {
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo} alt="" />
                <BarsOutlined />
            </div>
        </header>
    );
}
export default HomeHeader;
