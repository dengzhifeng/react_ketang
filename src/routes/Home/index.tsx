/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 07:55:45
 */
import React, { PropsWithChildren, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
import { connect } from 'react-redux';
import actions from '@/store/actions/home';
import { CombinedState } from '@/store/reducers';
import { HomeState } from '@/store/reducers/home';
type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type Props = PropsWithChildren<
    RouteComponentProps<Params> & stateProps & DispatchProps
>;
function Home(props: Props) {
    // 上拉加载 下拉刷新 虚拟列表
    let homeContainerRef = useRef(null);
    return (
        <>
            <HomeHeader
                currentCategory={props.currentCategory}
                setCurrentCategory={props.setCurrentCategory}
            />
            <div className="home-container" ref={homeContainerRef}>
                <HomeSliders sliders={props.sliders}></HomeSliders>
            </div>
        </>
    );
}
function mapStateToProps(state: CombinedState): HomeState {
    return state.home;
}
export default connect(mapStateToProps, actions)(Home);
