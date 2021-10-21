/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-20 07:35:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 07:36:23
 */
import React from 'react';
import { BarsOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.jpg';
import './index.less';
import { Transition } from 'react-transition-group';
import { CSSProperties } from 'react';
import classnames from 'classnames';
const duration = 1000; // 动画持续时间
const defaultStyle = {
    opacity: 0,
    transition: `opacity ${duration}ms ease-in-out`
};
interface TransitionStyles {
    entering: CSSProperties;
    entered: CSSProperties;
    exiting: CSSProperties;
    exited: CSSProperties;
}
const transitionStyles: TransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
};
interface Props {
    currentCategory: string;
    setCurrentCategory: (currentCategory: string) => any;
}
function HomeHeader(props: Props) {
    let [isCategoryVisible, setCategoryVisible] = React.useState(false);
    let setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        let target: HTMLUListElement = event.target as HTMLUListElement;
        let category = target.dataset.category;
        props.setCurrentCategory(category); // reducer修改
        setCategoryVisible(false);
    };
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo} alt="" />
                <BarsOutlined
                    onClick={() => setCategoryVisible(!isCategoryVisible)}
                />
            </div>
            <Transition in={isCategoryVisible} timeout={duration}>
                {(state: keyof TransitionStyles) => {
                    console.log(state);
                    return (
                        <ul
                            className="category"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <li
                                date-category="all"
                                className={classnames({
                                    active: props.currentCategory == 'all'
                                })}
                            >
                                全部课程
                            </li>
                            <li
                                data-category="react"
                                className={classnames({
                                    active: props.currentCategory == 'react'
                                })}
                            >
                                React课程
                            </li>
                            <li
                                data-category="vue"
                                className={classnames({
                                    active: props.currentCategory == 'vue'
                                })}
                            >
                                Vue课程
                            </li>
                        </ul>
                    );
                }}
            </Transition>
        </header>
    );
}
export default HomeHeader;
