/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-20 07:59:20
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Home(props: Props) {
    return (
        <>
            <HomeHeader />
        </>
    );
}
export default Home;
