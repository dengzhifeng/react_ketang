/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-15 17:49:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-15 17:56:03
 */
import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
function Profile(props: Props) {
    return <div>Profile</div>;
}
export default Profile;
