/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-22 21:53:46
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-24 11:27:49
 */
import React, { useEffect, PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NavHeader from '@/components/NavHeader';
import { message } from 'antd';
import { connect } from 'react-redux';
import actions from '@/store/actions/profile';
import { CombinedState } from '@/store/reducers';
import { ProfileState } from '@/store/reducers/profile';
type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type Props = PropsWithChildren<
    RouteComponentProps<Params> & stateProps & DispatchProps
>;

function Profile(props: Props) {
    useEffect(() => {
        props.validate().catch((error: any) => message.error(error.message));
    });
    return (
        <section>
            <NavHeader history={props.history}>个人中心</NavHeader>
        </section>
    );
}
function mapStateToProps(state: CombinedState): ProfileState {
    return state.profile;
}
export default connect(mapStateToProps, actions)(Profile);
