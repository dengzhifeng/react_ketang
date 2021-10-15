/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:55:48
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Cart(props: Props) {
    return <div>Cart</div>;
}
export default Cart;
