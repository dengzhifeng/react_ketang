/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-21 07:43:39
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
import { connect } from 'react-redux';
import actions from '@/store/actions/home';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Home(props: Props) {
    return (
        <>
            <HomeHeader />
        </>
    );
}
export default connect((state: any) => state.home, actions)(Home);
