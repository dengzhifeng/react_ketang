/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:57:24
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Home(props: Props) {
    return <div>Home</div>;
}
export default Home;
