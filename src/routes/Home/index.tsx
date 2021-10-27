/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-27 22:25:34
 */
import React, { PropsWithChildren, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
import { connect } from 'react-redux';
import actions from '@/store/actions/home';
import { CombinedState } from '@/store/reducers';
import { HomeState } from '@/store/reducers/home';
import HomeSliders from './components/HomeSliders';
import LessonList from './components/LessonList';
import { loadMore } from '@/utils';
import './index.less';
type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type Props = PropsWithChildren<
    RouteComponentProps<Params> & stateProps & DispatchProps
>;
function Home(props: Props) {
    // 上拉加载 下拉刷新 虚拟列表
    let homeContainerRef = useRef(null);
    let lessonListRef = useRef(null);
    useEffect(() => {
        loadMore(homeContainerRef.current, props.getLessons);
    });
    return (
        <>
            <HomeHeader
                currentCategory={props.currentCategory}
                setCurrentCategory={props.setCurrentCategory}
            />
            <div className="home-container" ref={homeContainerRef}>
                <HomeSliders
                    sliders={props.sliders}
                    getSliders={props.getSliders}
                ></HomeSliders>
                <LessonList
                    lessons={props.lessons}
                    getLessons={props.getLessons}
                ></LessonList>
            </div>
        </>
    );
}
function mapStateToProps(state: CombinedState): HomeState {
    return state.home;
}
export default connect(mapStateToProps, actions)(Home);
