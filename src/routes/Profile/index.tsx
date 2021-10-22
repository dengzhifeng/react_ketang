/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-22 21:53:46
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-22 22:17:30
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NavHeader from '@/components/NavHeader';

interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Profile(props: Props) {
    return (
        <section>
            <NavHeader history={props.history}>个人中心</NavHeader>
        </section>
    );
}
export default Profile;
