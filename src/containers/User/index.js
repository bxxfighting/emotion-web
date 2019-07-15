import { connect } from 'react-redux';
import User from '../../components/User';
import {
    getUserList,
    setUserListFetch,
    getRoleList,
    setUserCreateModalVisible,
    deleteUser,
    setUserUpdateModalVisible,
    setUserUpdateModalId,
    setUserUpdateModalName,
    setUserUpdateModalPhone,
    setUserUpdateModalEmail,
    setUserUpdateModalRoleIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.user.dataList,
        isFetch: state.user.isFetch,
    };
};

const mapDispatchToProps = dispatch => ({
    getUserList: () => dispatch(getUserList()),
    getRoleList: () => dispatch(getRoleList()),
    setUserListFetch: (data) => dispatch(setUserListFetch(data)),
    setUserCreateModalVisible: (data) => dispatch(setUserCreateModalVisible(data)),
    deleteUser: (data) => dispatch(deleteUser(data)),
    setUserUpdateModalVisible: (data) => dispatch(setUserUpdateModalVisible(data)),
    setUserUpdateModalId: (data) => dispatch(setUserUpdateModalId(data)),
    setUserUpdateModalName: (data) => dispatch(setUserUpdateModalName(data)),
    setUserUpdateModalPhone: (data) => dispatch(setUserUpdateModalPhone(data)),
    setUserUpdateModalEmail: (data) => dispatch(setUserUpdateModalEmail(data)),
    setUserUpdateModalRoleIds: (data) => dispatch(setUserUpdateModalRoleIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);