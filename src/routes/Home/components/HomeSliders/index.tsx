/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-26 08:02:50
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-26 08:10:48
 */
import Slider from '@/typings/slider';
import { Carousel } from 'antd';
import React, { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import './index.less';
type Props = PropsWithChildren<{
    sliders: Slider[];
    getSliders: any;
}>;
function HomeSliders(props: Props) {
    useEffect(() => {
        if (props.sliders.length === 0) {
            props.getSliders();
        }
    }, []);
    return (
        <Carousel effect="scrollx" aytoplay>
            {props.sliders.map((item: Slider, index: number) => (
                <div key={index}>
                    <img src={item.url} alt="" />
                </div>
            ))}
        </Carousel>
    );
}

export default HomeSliders;
