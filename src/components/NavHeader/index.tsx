/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-22 21:57:46
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 22:11:40
 */
import React, { PropsWithChildren } from 'react';
import './index.less';
import { LeftOutlined } from '@ant-design/icons';
import { History } from 'history';
interface Props {
    history: History;
}
function NavHeader(props: PropsWithChildren<Props>) {
    return (
        <div className="nav-header">
            <LeftOutlined onClick={() => props.history.goBack()} />
            {props.children}
        </div>
    );
}
export default NavHeader;
